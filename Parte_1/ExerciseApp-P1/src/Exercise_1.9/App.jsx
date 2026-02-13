import { useState } from "react";

const Statistics = (props) => {
  return (
    <>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </>
  );
};

const ConditionStatistics = (props) => {
  if ((props.good !== 0) | (props.neutral !== 0) | (props.bad !== 0))
    return (
      <>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.all}</p>
        <Statistics average={props.average} positive={props.positive} />
      </>
    );
  else return <p>No feedback given</p>;
};

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

      <ConditionStatistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average()}
        positive={positive()}
      />
    </>
  );
};

export default App;
