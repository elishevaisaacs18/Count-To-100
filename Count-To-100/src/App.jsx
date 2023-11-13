import { useState } from "react";
import Board from "./Components/Board";
import LogIn from "./Components/LogIn";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [connected, setConnected] = useState([]);
  console.log("CONNECTED", connected);

  return (
    <div style={{ display: "flex" }}>
      <Board connected={connected} />
      <LogIn
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        connected={connected}
        setConnected={setConnected}
      />
    </div>
  );
}

export default App;

localStorage.setItem(
  "efrat",
  JSON.stringify({
    userName: "efrat",
    password: "elimelech",
    scores: [1, 4, 6, 12],
  })
);
localStorage.setItem(
  "elisheva",
  JSON.stringify({
    userName: "elisheva",
    password: "isaacs",
    scores: [2, 12, 6, 8],
  })
);
