import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
      console.log('Current User:', response);
    })()
  }, [userId])
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

export default UserLoader