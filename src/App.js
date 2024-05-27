import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCounter] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("");
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <h2>Date Counter</h2>
      <div className="part-b">
        <input type='range' min="0" max="10" />
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div className="part-a">
        <button onClick={() => setCounter((s) => s - step)}>-</button>
        <span>Count : {count}</span>
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
    </div>
  );
}

export default App;