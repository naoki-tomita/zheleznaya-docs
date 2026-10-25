## component api

Component is same as `React.FunctionalComponent`.

### create component

```tsx
import { h } from "zheleznaya";
export const App = () => {
  return (
    <div>Hello zheleznaya!</div>
  );
}
```

### props and children

A component receives props as the first argument and children as the second argument.

```tsx
import { h } from "zheleznaya";

export const Card = ({ title }: { title: string }, children: any[]) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

### render component

```tsx
import { h, createRoot } from "zheleznaya";
import { App } from "./App";

const { render } = createRoot();

render(<App />);
```

#### [<- prev](#api-references) / [next ->](#zstyl)
