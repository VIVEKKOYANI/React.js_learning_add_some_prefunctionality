import React from 'react'

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <div>
      <h4>{name} - {price}</h4>
    </div>
  )
}

export default SmallProductListItem