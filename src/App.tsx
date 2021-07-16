import React from "react";

import "./styles/reset.css";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div id="root">
      <Header />
      <Main />
    </div>
  );
}

export default App;
