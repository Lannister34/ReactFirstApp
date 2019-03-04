import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import { moviesData } from "./moviesData";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App films={moviesData} />, rootElement);
