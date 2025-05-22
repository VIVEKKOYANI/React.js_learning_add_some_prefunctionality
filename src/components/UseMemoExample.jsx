// UseMemoExample.jsx
import React, { useState, useMemo } from "react";

// Main component
export default function UseMemoExample() {
  // State to track how many times "+" button is clicked
  const [count, setCount] = useState(0);

  // State to track how many times "number" button is clicked (starts from 5)
  const [number, setNumber] = useState(5);

  /**
   * useMemo memoizes the result of number * count.
   * BUT it only recomputes when `number` changes.
   * So if `count` changes alone, it won't update showNumber.
   */
  const showNumber = useMemo(() => {
    return number * count;
  }, [number]); // ⚠️ `count` is not included

  // Logging number in console for debugging
  console.log("number", number);

  return (
    <div className="App">
      {/* Render the memoized result */}
      <p>Result (number * count): {showNumber}</p>

      {/* Button to increment count */}
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>

      {/* Button to increment number */}
      <button onClick={() => setNumber((pre) => pre + 1)}>number</button>
    </div>
  );
}


// ✅ 1. Answer to Your Question:
// ➤ When you click the "number" button 10 times:
// setNumber((pre) => pre + 1)
// number becomes 5 + 10 = 15

// count is still 0

// useMemo is:
// const showNumber = useMemo(() => {
//   return number * count;
// }, [number]);
// count is not in the dependency array

// So showNumber will be recomputed only when number changes

// At the time number becomes 15, count is still 0 → 15 * 0 = 0

// ✅ Final output: 0
// Even if you later increase count, showNumber won't update unless number changes again.