import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { BrowserRouter } from "react-router-dom";
import "./style/normalize.css";
import "./style/index.css";
import "./style/media.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/VSUET-schedule">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
