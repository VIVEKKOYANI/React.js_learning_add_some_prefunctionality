import React from 'react'

const NumberList = ({
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  return (
    <div>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <h3>Item {index + 1}</h3>
          <ItemComponent
            key={index}
            {...{ [resourceName]: item }}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default NumberList