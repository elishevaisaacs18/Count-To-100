import styles from "../Board.module.css";
import UserBoard from "./UserBoard";

const Board = (props) => {
  const handleStartGame = () => {
    props.setHasStartedGame(true);
  };

  const boardsArr = [];
  for (let i = 0; i < props.connected.length; i++) {
    const rndNum = Math.floor(Math.random() * 99);
    console.log("props.connected[i]: ", props.connected[i]);
    boardsArr.push(
      <UserBoard
        hasStartedGame={props.hasStartedGame}
        user={props.connected[i]}
        rndNum={rndNum}
        index={i}
        key={i}
        connected={props.connected}
        userTurn={props.userTurn}
        setUserTurn={props.setUserTurn}
        setConnected = {props.setConnected}
      />
    );
  }

  return (
    <div className={styles.boardContainer}>
      <h1>Count To 100</h1>
      {props.hasStartedGame ? (
        <button disabled>Start Game</button>
      ) : (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      <div className={styles.boardsCon}>{boardsArr}</div>
    </div>
  );
};

export default Board;
