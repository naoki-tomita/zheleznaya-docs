import { h, Component } from "zheleznaya";
import { styled } from "zstyl";

type RouteCallback = (route: string) => void;
const cbs: RouteCallback[] = [];
export function onRouteChange(cb: RouteCallback) {
  cbs.push(cb);
  cb(location.hash.replace("#", ""));
}

function emit() {
  cbs.forEach(it => it(location.hash.replace("#", "")));
}

window.addEventListener("hashchange", _ => emit());

const A = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const Link: Component = ({ href }: { href: string }, children) => {
  return (
    <A href={`#${href}`}>
      {children}
    </A>
  );
}
