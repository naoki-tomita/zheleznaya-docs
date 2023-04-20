import { Component, h } from "zheleznaya";
import { Link } from "../Router";
import { Title } from "./Title";

export const Header: Component<{ title: string }> = ({ title }) => {
  return (
    <header>
      <Title label={title} />
      <h1>
        <Link href="/">Zheleznaya</Link>
      </h1>
      <small>
        <code>
          <a href="https://github.com/naoki-tomita/zheleznaya">Github</a>
        </code>
      </small>
    </header>
  );
};
