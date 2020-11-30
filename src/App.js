import React,{useState,useEffect} from "react";
import "./App.css";
import { Button } from "antd";
// import Button from "antd/es/button";
// import "antd/dist/antd.css";

function App() {
  const [counter,setCount] = useState(0)
  function setCounts(){
    setCount(counter+1)
    setCount(counter+2)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={setCounts}>react test</Button>
        <p>{counter}</p>
      </header>
    </div>
  );
}

export default App;
