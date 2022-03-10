import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light ">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
