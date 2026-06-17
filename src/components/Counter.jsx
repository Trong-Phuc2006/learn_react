import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [clicks, setClick] = useState(0);
  function random() {
    let random = Math.floor(Math.random() * 100);
    setCount(random);
    setClick(clicks+1);
  }
    function backToZero() {
    setCount(0);
    setClick(0);
  }
  return (
    <div>
      <h1>State changing</h1>
      <p>You have click {clicks} times</p>
      <p>Count is {count}</p>
      <button onClick ={random}>Random num</button>
      <button onClick={backToZero}>Back to 0</button>
    </div>
  );
}
