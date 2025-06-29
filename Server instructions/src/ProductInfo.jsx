import React from 'react'

const ProductInfo = ({ product }) => {
  const { name, description, price, rating } = product || {};
  return product ? (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description</h3>
      <p>{description}</p>
      <p>Average Rating: {rating} stars</p>
    </div>
  ) : (
    <p>Loading product information...</p>
  )
}

export default ProductInfo