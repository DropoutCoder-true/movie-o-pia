import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0); 
  
  const increment = () => {
    setCounter(counter + 1); 
  }

  const decrement = () => {
    if(counter === 0) return; 
    setCounter(counter - 1); 
  }

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h1>
        {counter}
      </h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
