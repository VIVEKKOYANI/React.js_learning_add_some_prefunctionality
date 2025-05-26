import React, { memo, useCallback, useState } from 'react'

const Child = memo(({ handleClick }) => {
  console.log('Child component rendered');
  return (
    <button onClick={handleClick}>Child btn</button>
  )
})

const WithuseCallback = () => {
  const [count, setCount] = useState();

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, [])
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child handleClick={handleClick} />
    </>
  )
}

export default WithuseCallback;