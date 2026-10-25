import { h } from "zheleznaya";
import type { Component } from "../Types";

export const Content: Component = (_, children) => {
  return <main>{children}</main>;
};
