import React, { useState } from "react"
import './App.css'

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
      <input type="text" onChange={fetchData} label="Search User" className="form-control" />
      
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} {user.username} {user.email} {user.phone}</li>
          ))}
        </ul>
      )}
       </div>
      </div>
    </div>
  </div>
  )
}

export default SearchUser
