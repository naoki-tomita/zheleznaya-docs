declare global {
  const Prism: {
    highlightElement(
      html: Element,
      asyc: boolean,
      successCallback: () => void
    ): void;
    plugins: {
      autoloader: {
        loadLanguages(
          language: string,
          successCallback: () => void,
          errorCallback: () => void
        ): void;
      };
    };
  };
}

export async function highlightAll(dom: HTMLElement) {
  await Promise.all(
    Array.from(dom.querySelectorAll("pre > code")).map(async (it) => {
      const matched = it.className.match(/language\-([a-z]*)/);
      await loadLanguages(matched![1]);
      it.innerHTML = await highlight(it);
    })
  );
  return dom;
}

export function loadLanguages(language: string) {
  return new Promise<void>((ok, ng) =>
    Prism.plugins.autoloader.loadLanguages(language, ok, ng)
  );
}

export function highlight(dom: Element) {
  return new Promise<string>((ok) =>
    Prism.highlightElement(dom, false, () => ok(dom.innerHTML))
  );
}
