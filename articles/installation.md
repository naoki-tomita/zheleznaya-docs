## installation

### getting started

#### 1. Create new project.

```bash
> mkdir zheleznaya-app
> cd zheleznaya-app
> yarn init
> yarn add zheleznaya
> yarn add -D vite typescript
> touch index.html index.tsx tsconfig.json
```

> zheleznaya is an ES module only package. Use a bundler that supports ES modules, such as [Vite](https://vite.dev/).

#### 2. Write `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>app</title>
</head>
<body>
  <script type="module" src="./index.tsx"></script>
</body>
</html>
```

#### 3. Write `index.tsx`

```tsx
import { h, createRoot } from "zheleznaya";

const { render } = createRoot();

const App = () => {
  return (
    <h1>Hello zheleznaya!</h1>
  );
}

render(<App />);
```

#### 4. Write `tsconfig.json`

`jsx` and `jsxFactory` are required. Vite reads them as well.

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "bundler",
    "lib": ["esnext", "dom"],
    "strict": true,
    "jsx": "react",
    "jsxFactory": "h"
  }
}
```

#### 5. Run dev server

```bash
> yarn vite
```

You can see application on `http://localhost:5173`


#### [<- prev](#index) / [next ->](#api-references)
