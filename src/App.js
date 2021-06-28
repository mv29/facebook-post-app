import React, {useState} from 'react'
import PostList from './containers/PostList'
import './App.css';
import {Users} from "./data.js";

function App() {
  const [user] = useState(Users[0]);

  return (
    <div className="App">
      <div style={{"background-color": "blue", "color": "black", "margin": "auto"}}>
        <h1>Facebook Post App</h1>
      </div>
      <PostList user={user}/>
    </div>
  );
}

export default App;
