import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function UserAlbums() {
  const { userId } = useParams()
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [userId])

  return (
    <div>
      <h1>Альбоми користувача</h1>

      <Link to={`/`}>
        <button className="back">Назад до списку користувачів</button>
      </Link>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link to={`/albums/${userId}/photos/${album.id}`}>
              <button>Фотографії</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserAlbums
