const Time = (props) => {
  return (
    <h1>
      <span className="min">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="sec">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="milsec">
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </h1>
  );
};

export default Time;
