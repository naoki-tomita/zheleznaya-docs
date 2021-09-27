import { h, Component } from "zheleznaya";

export const Html: Component<{ html: string }> = ({ html }) => {
  return (
    <div ref={el => el.innerHTML = html} />
  );
}
