import React, { memo, useCallback, useState } from 'react'


const Child = ({handleClick}) => {
  console.log('Chile component rendered');
  return (
    <button onClick={handleClick}>Child btn</button>
  )
}

const WithoutuseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
  }
  
  return (
    <>
      <div>withoutuseCallback</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child handleClick={handleClick} />
    </>
  )
}

export default WithoutuseCallback;