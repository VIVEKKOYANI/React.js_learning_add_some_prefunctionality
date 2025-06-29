import React from 'react'

const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return (
    <>
      {user ? (
        <div>
          <h3>{name}</h3>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
          <h3>Hobbies</h3>
          <ul>
            {hobbies?.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  )
}

export default UserInfo