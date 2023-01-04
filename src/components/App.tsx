import { h, Component } from "zheleznaya";
import { store } from "../Store";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Html } from "./Html";
import { Loader } from "./Loader";

export const App: Component = () => {
  return (
    <div>
      <Header />
      <Content>
        {store.loading ? <Loader /> : <Html html={store.html} />}
      </Content>
      <Footer />
    </div>
  );
};
