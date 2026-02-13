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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header header={course} />

      <Content
        text1={part1}
        text2={part2}
        text3={part3}
        number1={exercises1}
        number2={exercises2}
        number3={exercises3}
      />

      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  );
};

export default App;
