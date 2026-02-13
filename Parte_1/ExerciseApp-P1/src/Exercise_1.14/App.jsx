import { useState } from "react";
import { Random, MersenneTwister19937 } from "random-js";

const Anecdote = (props) => {
  return (
    <>
      <p>
        {props.anecdote}
        <br />
        has {props.numVotes} votes
      </p>
    </>
  );
};

const ConditionAnecdote = (props) => {
  let prev = 0;
  let index = 0;
  for (const [id, vote] of Object.entries(props.votes)) {
    if (prev < vote) {
      prev = vote;
      index = id;
    }
  }

  return (
    <>
      <Anecdote
        anecdote={props.anecdotes[index]}
        numVotes={props.votes[index]}
      />
    </>
  );
};

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

  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const random = new Random(MersenneTwister19937.autoSeed());
  const getRandomInt = () => random.integer(0, anecdotes.length - 1);
  const handleAnecdote = () => {
    const index = getRandomInt();
    setSelected(index);
    console.log(votes);
  };

  const handleVote = () => {
    setVotes({
      ...votes, // Copio los anteriores
      [selected]: votes[selected] + 1, // Sobreescribo solo la llave actual con el valor + 1
    });
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={anecdotes[selected]} numVotes={votes[selected]} />

      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <ConditionAnecdote votes={votes} anecdotes={anecdotes} />
    </>
  );
};

export default App;
