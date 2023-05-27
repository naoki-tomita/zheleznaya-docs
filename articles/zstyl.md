## CSS in JS library

### zstyl

You can use [`zstyl`](https://www.npmjs.com/package/zstyl).

`zstyl` is a CSS in JS library like styled-components for zheleznaya.

#### how to use

You can write like styled-components or emotion.

```tsx
import { h, render } from "zheleznaya";
import { styled, css } from "zstyl";

// styled-component style.
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
  <Header color="blue">
    <div class="inner">200px height</div>
    {/* emotion style */}
    <div class={css`
      color: red;
      font-size: ${32}px;
    `}></div>
  </Header>
);

```

#### [<- prev](#component-api) / [next ->](#router-library)
