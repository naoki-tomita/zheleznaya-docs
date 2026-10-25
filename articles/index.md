## what is zheleznaya?

Zheleznaya is React like framework.

Built by extremely simple and minute code.

You can write app by ultra simple code.

This documentation written by `zheleznaya`.

```tsx
import { h, createRoot } from "zheleznaya";

const { render, createStore } = createRoot();

const store = createStore({ name: "" });

const Greet = ({ name }: { name: string }) => {
  return (
    <h1>Hello {name}!</h1>
  );
}

const App = () => {
  return (
    <div>
      <input oninput={(e: Event) => (store.name = (e.target as HTMLInputElement).value)} />
      <Greet name={store.name} />
    </div>
  );
}

render(<App />);
```

> Zheleznaya is not production yet.

> Upgrading from 0.2? See [migration guide](#migration).

#### [next ->](#installation)
