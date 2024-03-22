## Router library
### zrouter

You can use [`@kojiro.ueda/zrouter`](https://www.npmjs.com/package/@kojiro.ueda/zrouter) for routing.

`zrouter` is routing library.

#### how to use

```tsx
import { h, createStore } from "zheleznaya";
import { createRouter, PathStrategy } from "@kojiro.ueda/zrouter";

const store = createStore({
  path: location.pathname, // You must set path on root of store.
});

const { Router, Link } = createRouter(store, PathStrategy);

const App = () => {
  return (
    <Router
      routes={{
        // you can define path and component
        "/": () => <div>Top</div>
        // path can includes path parameter.
        "/path/to/:id": ({id}) => <div>{id}</div>
      }}
      error={() => <div>404 error</div>}
    />
  );
}
```

#### [<- prev](#zstyl)
