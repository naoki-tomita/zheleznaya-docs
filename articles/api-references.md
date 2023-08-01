## api references
T.B.D

### `render`

Rendering component.

```ts
function render(element: Element, rootElement: HTMLElement): void;
```

> * element: Zheleznaya component element.
> * rootElement: HTMLElement for deploying zheleznaya app. If not specified then zheleznaya creates `body > div` element and deploy app.


### `h`

Hyperscript function for jsx. Like `React.createElement` function.

You don't need to write hyperscript if you are using jsx.

```ts
function h(name: Component | string, attributes: any | null, ...children: Array<Node, string>): Element
```

See: [`React.createElement`](https://github.com/hyperhype/hyperscript)

### `createStore`, `getStore`, `useStore`

Create store instance or get store instance.

The instance is only one. You cannot have more than one instance.

Store instance is wrapped by reactive object. But you can use like standard js object. When reactive object's property have been changed, Zheleznaya perform rerendering.

```ts
function createStore<T>(obj: T): T
function getStore<T>(): T
function useStore<T>(obj: T): T
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
```ts
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
