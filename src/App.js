import React from 'react'
import './App.css';
import Board from './components/Board';
import NavBar from './components/Navbar';

function App() {

  return (
   <React.Fragment> 
       <NavBar />
    <div className="App" style={{backgroundImage: `url(https://images.unsplash.com/photo-1696188429864-0d78ebffb848?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize:"cover" }}>
  <Board />
  </div>
</React.Fragment>
  )
}

export default App;
