import React from "react";
import styles from "../Board.module.css";
import UserBoard from "./UserBoard";

const Board = (props) => {
  const boardsArr = [];
  for (let i = 0; i < props.connected.length; i++) {
    const rndNum = Math.floor(Math.random() * 99);
    // const id = "player" + (i + 1);
    console.log("props.connected[i]: ", props.connected[i]);
    boardsArr.push(
      <UserBoard user={props.connected[i]} rndNum={rndNum} key={i} />
    );
  }

  return (
    <>
      <h1>Count To 100</h1>
      <div
        className={styles.boardsCon}
        style={{ width: "70vw", height: "90vh" }}
      >
        {boardsArr}
      </div>
    </>
  );
};

export default Board;
