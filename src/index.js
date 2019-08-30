import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const urlData = "https://redmine.ekreative.com/projects.json";

ReactDOM.render(<App urlData={urlData} />, document.getElementById("root"));
