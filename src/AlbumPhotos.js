import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function AlbumPhotos() {
  const { userId, albumId } = useParams()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [userId, albumId])

  return (
    <div>
      <h1>Фото альбому</h1>
      <Link to={`/`}>
        <button className="back">Назад до списку користувачів</button>
      </Link>
      <Link to={`/albums/${userId}`}>
        <button className="back">Назад до списку альбомів</button>
      </Link>
      <ol>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default AlbumPhotos
