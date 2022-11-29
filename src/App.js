import { useState } from "react";
import "./App.css";
import { AutoCounter } from "./Components/AutoCounter";
import { Child } from "./Components/Child";
import { Counter1 } from "./Components/counter1";
import { Fetch } from "./Components/Fetch";
import { TodoWithCancel } from "./Components/TodoWithCancel";
function App() {
  const [text, setText] = useState("");
  const passText = () => {
    setText("Hello...!");
  };
  return (
    <div className="App">
      <Counter1 />
      <p>-------------------------------</p>
      <TodoWithCancel />
      <p>-------------------------------</p>
      <Child passText={passText} setText={setText} />
      <h3>text: {text}</h3>
      <p>-------------------------------</p>
      <AutoCounter />
      <p>-------------------------------</p>
      <Fetch />
    </div>
  );
}

export default App;
