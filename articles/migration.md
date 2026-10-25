## Migration from 0.2 to 0.3

### `render`, `createStore`, `getStore` moved to `createRoot`

The global `render`, `createStore`, `getStore` and `useStore` were removed. Create a root with `createRoot` and use its `render` and `createStore` instead.

```tsx
// 0.2
import { h, render, createStore } from "zheleznaya";

const store = createStore({ count: 0 });
render(<App />, document.getElementById("app"));
```

```tsx
// 0.3
import { h, createRoot } from "zheleznaya";

const { render, createStore } = createRoot(document.getElementById("app")!);

const store = createStore({ count: 0 });
render(<App />);
```

* The root element is now an argument of `createRoot`, not of `render`.
* Create the store before calling `render`. The store is bound to the root.
* `useStore` was removed. Create the store with `createStore` of the root instead.

### ES module only

zheleznaya is now an ES module only package (`"type": "module"`).

* Use a bundler that supports ES modules, such as [Vite](https://vite.dev/).
* To load zheleznaya from CommonJS (`require`) on Node.js, use Node.js 20.19+ / 22.12+.

### `ref` is called only when the element is created

`ref` is no longer called on every rerendering. It is called only when the element is created.

### `renderToText` is available

`renderToText` renders component to html string for server side rendering. See [api references](#api-references).

#### [<- prev](#router-library)
