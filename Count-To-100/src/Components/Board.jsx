import { useState } from "react";
import styles from "../Board.module.css";
import UserBoard from "./UserBoard";

const Board = (props) => {
  const handleStartGame = () => {
    props.setHasStartedGame(true);
  };

  const boardsArr = [];
  for (let i = 0; i < props.connected.length; i++) {
    const rndNum = Math.floor(Math.random() * 99);
    const id = "player" + (i + 1);
    console.log("props.connected[i]: ", props.connected[i]);
    boardsArr.push(
      <UserBoard
        hasStartedGame={props.hasStartedGame}
        user={props.connected[i]}
        rndNum={rndNum}
        key={id}
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
      <div
        className={styles.boardsCon}
        style={{ width: "70vw", height: "90vh" }}
      >
        {boardsArr}
      </div>
    </div>
  );
};

export default Board;
