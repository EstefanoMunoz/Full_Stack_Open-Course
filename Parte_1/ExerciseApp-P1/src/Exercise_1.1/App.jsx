const Header = (props) => {
  return (
    <>
      <p>{props.header}</p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.text1} {props.number1}
      </p>

      <p>
        {props.text2} {props.number2}
      </p>

      <p>
        {props.text3} {props.number3}
      </p>
    </>
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
