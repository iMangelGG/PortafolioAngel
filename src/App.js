import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Banner } from "./components/Banner";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
