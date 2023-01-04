import { h, Component } from "zheleznaya";
import { styled } from "zstyl";

const Spinner = styled`
  margin: 100px auto;
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 18px;
    height: 18px;
    background-color: var(--text-bright);

    border-radius: 100%;
    display: block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1.0);
    }
  }

`;

export const Loader: Component = () => {
  return (
    <Spinner>
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </Spinner>
  );
};
