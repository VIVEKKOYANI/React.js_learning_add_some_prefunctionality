import React, { useState } from 'react'

const MultipleStateUpdate = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    // You might expect count to increase by 4, but it only increases by 1.
    // React batches state updates in the same event loop when you use the same value (count):

    // 1. count is 0 initially

    // 2. So all setCount(count + 1) → setCount(1)

    // 3. React sees them all as the same → Only one update is applied
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // Correct way (increment by 4):
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default MultipleStateUpdate