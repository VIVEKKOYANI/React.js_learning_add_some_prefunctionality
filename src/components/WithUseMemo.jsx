import React, { useMemo } from 'react'

const WithUseMemo = () => {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
    </div>
  )
}

export default WithUseMemo