import React, { useState } from 'react'

const AddUserForm = (props) => {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Username</label>
      <input type="text" name="username"  />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm