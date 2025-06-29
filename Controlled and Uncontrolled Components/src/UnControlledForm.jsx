import React from 'react'

const UnControlledForm = () => {
  const nameInput = React.useRef(null);
  const ageInput = React.useRef(null);
  const hairColorInput = React.useRef(null);

  const handleSubmit = (event) => {}
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' type="text" placeholder='Name' ref={nameInput} />
      <input name='age' type="text" placeholder='Age' ref={ageInput} />
      <input name='hairColor' type="text" placeholder='Hair Color' ref={hairColorInput} />
      <input type="submit" value='Submit' />
    </form>
  )
}

export default UnControlledForm