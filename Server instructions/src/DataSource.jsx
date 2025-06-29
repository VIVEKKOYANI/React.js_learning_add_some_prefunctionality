import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getDataFunc();
      setState(response);
      console.log('Current User:', response);
    })()
  }, [getDataFunc])
  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </div>
  )
}

export default DataSource