import React from 'react'

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          {...{ [resourceName]: item }}
        />
      ))}
    </div>
  )
}

export default RegularList