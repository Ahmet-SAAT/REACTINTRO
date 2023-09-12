import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";//bunu yaparsak style.scss de eact imortu yapmaliyiz
import "bootstrap/dist/css/bootstrap.min.css";//boyle yaparsak bunun icin baska importa gerek yok

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);