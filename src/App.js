import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <div className="d-flex flex-column bg-light h-100">
      <header className="sticky-top">
        <Header></Header>
      </header>
      <Main></Main>
    </div>
  );
}

export default App;
