import React, { useState } from 'react'

const WithoutUseMemo = () => {
  const [count, setCount] = useState(0);

  const double = count * 2;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
    </div>
  )
}

export default WithoutUseMemo;