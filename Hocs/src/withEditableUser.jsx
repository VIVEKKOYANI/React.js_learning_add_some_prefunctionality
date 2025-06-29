import axios from 'axios';
import React, { useEffect, useState } from 'react'

const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
        setOriginalUser(response.data);
      })()
    }, [])

    const onChangeUser = changes => {
      setUser({ ...user, ...changes });
    }

    const onSaveUser = async() => {
      const response = await axios.post(`/users/${userId}`, { user });
      setUser(response.data);
      setOriginalUser(response.data);
    }

    const onResetUser = () => {
      setUser(originalUser);
    }

    return <Component
      {...props}
      user={user}
      onChangeUser={onChangeUser}
      onSaveUser={onSaveUser}
      onResetUser={onResetUser}
    />
  }
}

export default withEditableUser