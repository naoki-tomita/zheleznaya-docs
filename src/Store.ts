import marked from "marked";
import { createStore } from "zheleznaya";
import { highlightAll } from "./Prism";
import { HashStrategy, createRouter } from "@kojiro.ueda/zrouter";

export const store = createStore<{
  path: string;
  title: string;
  html: string;
  loading: boolean;
}>({
  path: location.hash.replace("#", ""),
  title: "zheleznaya document",
  html: "",
  loading: false,
});
const router = createRouter(store, HashStrategy);
router.onRouteChange(() => href(store.path.replace("#", "")));

loadMakdown(`${store.path}.md`);

export function href(path: string) {
  loadMakdown(`${path}.md`);
}

function scrollTop() {
  window.scrollTo({ behavior: "auto", left: 0, top: 0 });
}

async function markedAsync(md: string): Promise<string> {
  return new Promise((ok) => marked(md, (_, d) => ok(d)));
}

export async function loadMakdown(path: string): Promise<void> {
  store.loading = true;
  try {
    const markdown = await fetch(`../articles/${path}`)
      .then(it => it.ok ? it.text() : "")
      .then(it => it.trim());
    if (!markdown) {
      router.replace("index");
      return;
    }
    const html = document.createElement("div");
    html.innerHTML = await markedAsync(markdown);
    store.title = markdown.slice(0, markdown.indexOf("\n")).replaceAll("#", "")
    store.html = (await highlightAll(html)).innerHTML;
  } finally {
    store.loading = false;
  }
  scrollTop();
}
