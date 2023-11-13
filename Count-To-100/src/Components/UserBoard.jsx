import React, { useState } from "react";
// import Board from "./Board";
import styles from "../Board.module.css";

const UserBoard = (props) => {
  const [num, setNum] = useState(props.rndNum);
  const [steps, setSteps] = useState(0);

  function checkIfWon() {
    if (num === 100) {
      alert(`${props.user.username} won`);
    }
  }

  function add() {
    setNum(num + 1);
    setSteps(steps + 1);
    checkIfWon();
  }
  function sub() {
    setNum(num - 1);
    setSteps(steps + 1);
    checkIfWon();
  }
  function multiply() {
    setNum(num * 2);
    setSteps(steps + 1);
    checkIfWon();
  }
  function divide() {
    setNum(Math.floor(num / 2));
    setSteps(steps + 1);
    checkIfWon();
  }
  return (
    <div className={styles.playerBoard}>
      <h2>{props.user.userName}</h2>
      <h3>{num}</h3>
      {props.hasStartedGame ? (
        <>
          <button onClick={add}>+1</button>
          <button onClick={sub}>-1</button>
          <button onClick={multiply}>*2</button>
          <button onClick={divide}>/2</button>
        </>
      ) : (
        <>
          <button disabled onClick={add}>
            +1
          </button>
          <button disabled onClick={sub}>
            -1
          </button>
          <button disabled onClick={multiply}>
            *2
          </button>
          <button disabled onClick={divide}>
            /2
          </button>
        </>
      )}
      <h4>steps : {steps}</h4>
      {/* <h4>score : {score}</h4> */}
    </div>
  );
};

export default UserBoard;
