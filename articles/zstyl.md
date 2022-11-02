## CSS in JS library

### zstyl

You can use [`zstyl`](https://www.npmjs.com/package/zstyl).

`zstyl` is a CSS in JS library like styled-components for zheleznaya.

#### how to use

You can write like styled-components.

```tsx
import { h, render } from "zheleznaya";
import { styled } from "zstyl";

const Header = styled<{
  color: string;
}>`
  display: flex;
  justify-content: center;
  background: ${({ color }) => color}

  &:hover {
    background: #000;
  }

  div.inner {
    height: 200px;
  }
`;

render(
  <Header>
    <div class="inner">200px height</div>
  </Header>
);

```

#### [<- prev](#component-api)