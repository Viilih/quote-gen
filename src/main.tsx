import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import RouterElement from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterElement />
  </React.StrictMode>
);
