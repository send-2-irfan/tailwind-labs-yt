import { useState } from "react";
import WorkImage from "./assets/beach-work.jpg";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-6 py-12">
      <img src={logo} alt="vite logo" />
      <img
        className="rounded-lg mt-6"
        src={WorkImage}
        alt="image of a lady working on a beach"
      />
      <h1> Hello From the future </h1>
    </div>
  );
}

export default App;
