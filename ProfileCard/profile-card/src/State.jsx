import { useState } from "react";

function Greated() {
  const [count, setCount] = useState(0);
  const something = () => {
    setCount(count + 1);
  };
  return(
    <>
    <button onClick={something}>+</button>
    <h1>{count}</h1>

    </>
  )
}

export default Greated
