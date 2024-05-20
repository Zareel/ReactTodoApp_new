import React from 'react'

const UserDetails = ({name,email,password}) => {
  return (
    <div>
    <h1>{name}</h1>
    <h1>{email}</h1>
    <h1>{password}</h1>
    </div>
  )
}
export default UserDetails