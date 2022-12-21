import { match } from "assert";
import marked from "marked";
import { createStore } from "zheleznaya";
import { onRouteChange } from "./Router";


async function highlightAll(dom: HTMLElement) {
  await Promise.all(
    Array.from(dom.querySelectorAll(`pre > code`))
      .map(async (it) => {
        const matched = it.className.match(/language\-([a-z]*)/);
        await loadLanguages(matched![1])
        it.innerHTML = await highlight(it as any)
      })
  );
  return dom;
}

function loadLanguages(language: string) {
  return new Promise<void>((ok, ng) => {
    (window as any).Prism.plugins.autoloader.loadLanguages(language, ok, ng);
  });
}

function highlight(dom: HTMLElement) {
  return new Promise<string>(ok => {
    (window as any).Prism.highlightElement(dom, false, () => ok(dom.innerHTML));
  });
}

export const store = createStore<{
  path: string;
  html: string;
  loading: boolean;
}>({
  path: location.hash.replace("#", ""),
  html: "",
  loading: false,
});
onRouteChange((path) => {
  href(path);
});
fetchMarkdown(`${store.path}.md`);
export function href(path: string) {
  if (path === store.path) {
    return;
  }
  store.path = path;
  fetchMarkdown(`${path}.md`);
}

function scrollTop() {
  window.scrollTo({ behavior: "auto", left: 0, top: 0 });
}

async function markedAsync(md: string): Promise<string> {
  return new Promise((ok) => marked(md, (_, d) => ok(d)));
}

export async function fetchMarkdown(path: string): Promise<void> {
  store.loading = true;
  if (path === "/.md") {
    location.hash = "#index";
    store.loading = false;
    return;
  }
  const markdown = await fetch(`../articles/${path}`).then((it) =>
    it.ok ? it.text() : ""
  );
  if (!markdown) {
    location.hash = "#index";
    store.loading = false;
    return;
  }
  const html = document.createElement("div");
  html.innerHTML = await markedAsync(markdown);
  store.html = (await highlightAll(html)).innerHTML;
  store.loading = false;
  scrollTop();
}
