import { h } from "zheleznaya";
import type { Component } from "../Types";
let title: HTMLTitleElement = globalThis?.document?.querySelector("title")!;

export const Title: Component<{ label: string }> = ({ label }) => {
  title.innerText = label;
  return <div></div>
}
