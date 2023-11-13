import { useState } from "react";
import Board from "./Components/Board";
import LogIn from "./Components/LogIn";

const connected = [
  { username: "Efrat", score: [1, 4, 6, 12] },
  { username: "Elisheva", score: [2, 12, 6, 8] },
];
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Board connected={connected} />
      <LogIn />
    </div>
  );
}

export default App;
