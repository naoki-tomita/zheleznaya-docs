import { h } from "zheleznaya";
import type { Component } from "../Types";

export const Html: Component<{ html: string }> = ({ html }) => {
  return <div ref={(el) => (el.innerHTML = html)} />;
};
