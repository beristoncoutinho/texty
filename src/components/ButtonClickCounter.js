import React from "react";
import { useState } from "react";

export default function ButtonClickCounter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <button className=" btn btn-primary m-4" onClick={handleCount}>
      clicked {count} times
    </button>
  );
}
