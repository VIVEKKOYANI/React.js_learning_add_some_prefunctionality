import React from 'react'

const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;

  return (
    <div>
      <h4>{name}</h4>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </div>
  )
}

export default LargeProductListItem