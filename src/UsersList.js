import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <Link to={`/albums/${user.id}`}>
              <button>Альбоми</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
