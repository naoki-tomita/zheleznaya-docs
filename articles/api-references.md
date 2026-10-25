## api references

### `createRoot`

Create a root for deploying zheleznaya app.

```ts
function createRoot(rootElement?: Element): {
  render(element: Element): void;
  createStore<T extends {}>(obj: T): T;
  getStore<T>(): T;
};
```

> * rootElement: HTMLElement for deploying zheleznaya app. If not specified then zheleznaya creates `body > div[data-z="root"]` element and deploy app.

Each root has its own `render` and store.

#### `render`

Rendering component into the root.

```ts
function render(element: Element): void;
```

> * element: Zheleznaya component element.

#### `createStore`, `getStore`

Create store instance or get store instance of the root.

The instance is only one per root. Create the store before calling `render`.

Store instance is wrapped by reactive object. But you can use like standard js object. When reactive object's property have been changed, Zheleznaya perform rerendering.

```ts
const { render, createStore, getStore } = createRoot();

const store = createStore({ count: 0 });
getStore<{ count: number }>() === store; // true

const App = () => (
  <button onclick={() => store.count++}>{store.count}</button>
);

render(<App />);
```

### `h`

Hyperscript function for jsx. Like `React.createElement` function.

You don't need to write hyperscript if you are using jsx.

```ts
function h(name: Component | string, attributes: any | null, ...children: Array<Child | Child[]>): Element
```

See: [`React.createElement`](https://github.com/hyperhype/hyperscript)

#### attributes

* `on*` (e.g. `onclick`, `oninput`): set as an event handler.
* `style`: an object such as `{ backgroundColor: "black" }` or a string.
* `ref`: called with the created element. It is called only when the element is created, not on rerendering.
* `true` / `false`: set or remove the attribute.

### `renderToText`

Render component to html string. This is useful for server side rendering.

```ts
function renderToText(element: Element): string;
```

```tsx
import { h, renderToText } from "zheleznaya";

renderToText(<h1>Hello</h1>); // "<h1 >Hello</h1>"
```

### `createEffect`

Create effect function. You can add effect when rendering component.

```ts
type EffectFn = (effect: () => void, watcher: any[]) => void
function createEffect(): EffectFn
```

* `effect`: Some executable effect.
* `watcher`: The effect is executed when one of the variables specified here is changed.

#### How to use `createEffect`
```tsx
const effect = createEffect();
const App = () => {
  effect(() => {
    // something loading or set store.
  }, []);

  return (
    <div>{store.fetchedData}</div>
  );
}
```

#### [<- prev](#installation) / [next ->](#component-api)
