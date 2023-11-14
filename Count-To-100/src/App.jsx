import { useState } from "react";
import Board from "./Components/Board";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [connected, setConnected] = useState([]);
  const [hasStartedGame, setHasStartedGame] = useState(false);
  const [userTurn, setUserTurn] = useState(0);
  const [inLogIn, setInLogIn] = useState(true);

  return (
    <>
      <Board
        connected={connected}
        setConnected={setConnected}
        hasStartedGame={hasStartedGame}
        setHasStartedGame={setHasStartedGame}
        userTurn={userTurn}
        setUserTurn={setUserTurn}
      />
      {inLogIn ? (
        <LogIn
          userName={userName}
          setUserName={setUserName}
          password={password}
          setPassword={setPassword}
          connected={connected}
          setConnected={setConnected}
          setInLogIn = {setInLogIn}
        />
      ) : (
        <SignUp 
        setInLogIn = {setInLogIn}/>
      )}
    </>
  );
}

export default App;

// localStorage.setItem(
//   "efrat",
//   JSON.stringify({
//     userName: "efrat",
//     password: "2",
//     scores: [],
//   })
// );
// localStorage.setItem(
//   "elisheva",
//   JSON.stringify({
//     userName: "elisheva",
//     password: "1",
//     scores: [],
//   })
// );
