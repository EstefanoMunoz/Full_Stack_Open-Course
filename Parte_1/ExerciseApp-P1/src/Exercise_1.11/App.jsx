import { useState } from "react";

const Statistics = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{props.positive}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.onHandle}>{props.text}</button>
    </>
  );
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
      <Button onHandle={handleGood} text="good"></Button>
      <Button onHandle={handleNeutral} text="neutral"></Button>
      <Button onHandle={handleBad} text="bad"></Button>
      <Button onHandle={reset} text="reset"></Button>
      <h2>
        <strong>statistics</strong>
      </h2>

      <Statistics
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
