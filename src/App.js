import React, { useState } from 'react'
import PostList from './containers/PostList'
import './App.css';
import { Users } from "./data.js";

function App() {
  const [currentUser] = useState(Users[0]);

  return (
    <div className="App">
      <div
        className="p-2 text-center"
        style={{ "background-color": "blue", "color": "black", "margin": "auto", "position": "sticky" }}>
        <h1>Facebook Post App</h1>
      </div>
      <PostList currentUser={currentUser} />
    </div>
  );
}

export default App;
