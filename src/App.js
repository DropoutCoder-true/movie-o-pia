import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(100); 
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
      <h1>
        {count}
      </h1>
      <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
    </div>
  );
}

export default App;
