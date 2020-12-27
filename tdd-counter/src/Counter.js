import React, {useState} from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button onClick={() => setCounter(counter + 1)} id="increment-btn">
        Increment
      </button>
      <button onClick={() => setCounter(counter - 1)} id="decrement-btn">
        Decrement
      </button>
    </div>
  )
}
