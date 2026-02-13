import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(good + neutral + bad);

  const average = () => (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = () => (good / all) * 100;

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  const reset = () => {
    setGood(0);
    setBad(0);
    setNeutral(0);
    setAll(0);
  };

  return (
    <>
      <h2>
        <strong>give feedback</strong>
      </h2>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={reset}>reset</button>
      <h2>
        <strong>statistics</strong>
      </h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average()}</p>
      <p>positive {positive()}%</p>
    </>
  );
};

export default App;
