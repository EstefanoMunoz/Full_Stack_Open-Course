const Header = (props) => {
  return (
    <>
      <p>{props.header}</p>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.text} {props.number}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part text={props.text1} number={props.number1} />
      <Part text={props.text2} number={props.number2} />
      <Part text={props.text3} number={props.number3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header header={course} />

      <Content text={part1.name} number={part1.exercises} />
      <Content text={part2.name} number={part2.exercises} />
      <Content text={part3.name} number={part3.exercises} />

      <Total
        ex1={part1.exercises}
        ex2={part2.exercises}
        ex3={part3.exercises}
      />
    </div>
  );
};

export default App;
