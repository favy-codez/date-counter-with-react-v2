import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCounter(0);
    setStep(1);
  }

  const date = new Date("september 8 2024");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <h2>Date Counter</h2>
      <div className="part-b">
        <input
          type="range"
          min="0"
          max="10"
          // making it a controlled element we have
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step : {step}</span>
      </div>

      <div className="part-a">
        <button onClick={() => setCounter((s) => s - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCounter(e.target.value)}
        />
        <button onClick={() => setCounter((s) => s + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day(s) from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
