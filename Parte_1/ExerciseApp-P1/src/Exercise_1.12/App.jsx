import { useState } from "react";
import { Random, MersenneTwister19937 } from "random-js";

const App = () => {
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const random = new Random(MersenneTwister19937.autoSeed());
  const getRandomInt = () => random.integer(0, anecdotes.length - 1);
  const handleAnecdote = () => {
    const index = getRandomInt();
    setSelected(index);
  };

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleAnecdote}>next anecdote</button>
    </>
  );
};

export default App;
