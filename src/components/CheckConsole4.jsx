import React, { useEffect, useState } from 'react'

const CheckConsole4 = () => {
  const [count, setCount] = useState(0);

  // This runs on every render
  useEffect(() => {
    console.log("Hello from useEffect 1");
  });

  // This runs only once (after first render)
  useEffect(() => {
    console.log("Hello from useEffect 2");
  }, []);

  // Hello from useEffect 1
  // Hello from useEffect 2
  // Hello from useEffect 1   ← after 1st click
  // Hello from useEffect 1   ← after 2nd click

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default CheckConsole4