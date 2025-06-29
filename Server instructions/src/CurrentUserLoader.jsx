import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/current-user');
      setUser(response.data);
      console.log('Current User:', response.data);
    })()
  }, [])
  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </div>
  )
}

export default CurrentUserLoader