import React, { useRef } from 'react'

// useRef() returns a mutable object (.current) that persists across renders.
// ➡️ Common uses:

// Access DOM elements

// Store mutable values without re-rendering

const UseRef = () => { 
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Type here' />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRef