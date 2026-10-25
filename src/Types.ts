import type { h } from "zheleznaya";

// zheleznaya does not export its Component type, so derive it from h.
type Children = Parameters<typeof h> extends [any, any, ...infer C] ? C : never;
export type Component<P = any> = (
  props: P,
  children: Children,
) => ReturnType<typeof h>;
