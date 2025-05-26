import React, { useRef } from 'react'
import MyInput from './MyInput';

// forwardRef – Pass ref to child component
// ➡️ What is forwardRef?
// By default, refs do not pass through custom components.
// Use forwardRef to allow parent to access a child’s DOM node.



const ForwardComponent = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} placeholder="Custom Input" />
      <button onClick={handleClick}>Focus Custom Input</button>
    </>
  )
}

export default ForwardComponent