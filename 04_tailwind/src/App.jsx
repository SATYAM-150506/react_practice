import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-amber-400 text-black rounded-xl p-4">
        This is tailwind with vite
      </h1>
      <Card/>
    </>
  );
}

export default App;
