import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Divider } from "antd";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";
import SetStatePage from "./pages/SetStatePage";
import FuncClassComp from "./pages/FuncClassComp";

function App() {
  const [counter, setCount] = useState(0);
  function setCounts() {
    setCount(counter + 1);
    setCount(counter + 2);
  }
  return (
    <div className="App">
      <Divider dashed />
      <header className="App-header">
        <Button type="primary" onClick={setCounts}>
          react test
        </Button>
        <p>{counter}</p>
      </header>
      <Divider dashed />
      <SetStatePage />
      <Divider dashed />
      <FuncClassComp />
    </div>
  );
}

export default App;
