import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import UsersList from "./UsersList"
import UserAlbums from "./UserAlbums"
import AlbumPhotos from "./AlbumPhotos"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<UsersList />} />
        <Route path="/albums/:userId" exact element={<UserAlbums />} />
        <Route
          path="/albums/:userId/photos/:albumId"
          exact
          element={<AlbumPhotos />}
        />
      </Routes>
    </Router>
  )
}

export default App
