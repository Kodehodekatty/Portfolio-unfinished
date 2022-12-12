import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import { ShowImage } from "./components/Background";

function App() {
  return (
    <div>
    <div>
    <Navbar />
    </div>
      <div>
        <Background />
      </div>
    </div>
  );
}

export default App;
