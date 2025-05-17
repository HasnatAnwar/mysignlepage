import logo from "./logo.svg";
import "./App.css";
import CheckPage from "./pages/Check";
import Sidebar from "./components/sections/Sidebar";
function App() {
  return (
    <div className="App d-md-flex">
      <Sidebar />
      <CheckPage />
    </div>
  );
}

export default App;
