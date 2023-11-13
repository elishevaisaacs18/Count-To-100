import { useState } from 'react'
import Board from './Components/Board';
import LogIn from './Components/LogIn';

function App() {

  return (
    <div style ={{display:"flex"}}>
    <Board />
    <LogIn />
    </div>
  )
}

export default App
