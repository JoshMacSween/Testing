import "./App.css";
import React from "react";
import Counter from './Counter'

function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter />
      {/* <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button onClick={() => setCounter(counter + 1)} id="increment-btn">
        Increment
      </button>
      <button onClick={() => setCounter(counter - 1)} id="decrement-btn">
        Decrement
      </button> */}
    </div>
  );
}

export default App;
