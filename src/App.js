import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light ">
      <header className="sticky-top">
        <Header></Header>
      </header>
      <Main></Main>
    </div>
  );
}

export default App;
