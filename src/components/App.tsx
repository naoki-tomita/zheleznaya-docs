import { h } from "zheleznaya";
import type { Component } from "../Types";
import { store } from "../Store";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Html } from "./Html";
import { Loader } from "./Loader";

export const App: Component = () => {
  return (
    <div>
      <Header title={`${store.title} | zheleznaya docs`} />
      <Content>
        {/*
          zheleznaya calls ref only when an element is created. Wrapping Html in
          an array makes its node type differ from Loader's, so the element is
          recreated (and ref is called) every time loading finishes.
        */}
        {store.loading ? <Loader /> : [<Html html={store.html} />]}
      </Content>
      <Footer />
    </div>
  );
};
