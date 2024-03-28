import { render, h } from "zheleznaya";
import { App } from "./src/components/App";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://c57ad2b04d85f44ff4941c4cba19f869@o4506986090266624.ingest.us.sentry.io/4506986094723072",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", "zheleznaya.netlify.app"],
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

render(<App />);
