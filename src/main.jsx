import React from "react";
import ReactDOM from "react-dom/client"; // ✅ REQUIRED
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import "react-photo-view/dist/react-photo-view.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);