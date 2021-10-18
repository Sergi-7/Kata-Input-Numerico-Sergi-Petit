import { useState } from "react";

const NumericInput = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <button onClick={() => (number < 10 ? setNumber(number + 1) : "")}>
        +
      </button>
      <input value={number} readOnly="readonly"></input>
      <button onClick={() => (number > 0 ? setNumber(number - 1) : "")}>
        -
      </button>
    </>
  );
};

export default NumericInput;
