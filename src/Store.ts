import marked from "marked";
import { createStore } from "zheleznaya";
import { highlightAll } from "./Prism";
import { onRouteChange } from "./Router";

export const store = createStore<{
  path: string;
  html: string;
  loading: boolean;
}>({
  path: location.hash.replace("#", ""),
  html: "",
  loading: false,
});
onRouteChange((path) => href(path));

loadMakdown(`${store.path}.md`);

export function href(path: string) {
  if (path === store.path) {
    return;
  }
  store.path = path;
  loadMakdown(`${path}.md`);
}

function scrollTop() {
  window.scrollTo({ behavior: "auto", left: 0, top: 0 });
}

async function markedAsync(md: string): Promise<string> {
  return new Promise((ok) => marked(md, (_, d) => ok(d)));
}

export async function loadMakdown(path: string): Promise<void> {
  if (path === "/.md") {
    location.hash = "#index";
    return;
  }
  store.loading = true;
  try {
    const markdown = await fetch(`../articles/${path}`).then((it) =>
      it.ok ? it.text() : ""
    );
    if (!markdown) {
      location.hash = "#index";
      return;
    }
    const html = document.createElement("div");
    html.innerHTML = await markedAsync(markdown);
    store.html = (await highlightAll(html)).innerHTML;
  } finally {
    store.loading = false;
  }
  scrollTop();
}
