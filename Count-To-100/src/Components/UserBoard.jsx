import { useState } from "react";
import styles from "../Board.module.css";

const UserBoard = (props) => {
  const [num, setNum] = useState(props.rndNum);
  const [steps, setSteps] = useState(0);
  const [scores, setScores] = useState(props.user.scores);
  const rndNum = Math.floor(Math.random() * 99);

  function checkIfWon(newNum) {
    if (newNum === 100) {
      if(confirm(`${props.user.userName} won, do you want to start a new game?`) === true){
        setNum(rndNum);
        setSteps(0);
      } else{
        logOut();
      }
      setScores([...scores, steps + 1]);
      const currUser = JSON.parse(localStorage.getItem(props.user.userName));
      currUser.scores = [...scores, steps + 1];
      localStorage.setItem(props.user.userName, JSON.stringify(currUser));
    }
  }

  function add() {
    setNum(num + 1);
    setSteps(steps + 1);
    checkIfWon(num + 1);
    changeTurn();
  }
  function sub() {
    setNum(num - 1);
    setSteps(steps + 1);
    checkIfWon(num - 1);
    changeTurn();
  }
  function multiply() {
    setNum(num * 2);
    setSteps(steps + 1);
    checkIfWon(num * 2);
    changeTurn();
  }
  function divide() {
    setNum(Math.floor(num / 2));
    setSteps(steps + 1);
    checkIfWon(Math.floor(num / 2));
    changeTurn();
  }

  function changeTurn() {
    if (props.index === props.connected.length - 1) {
      props.setUserTurn(0);
    } else {
      props.setUserTurn(props.userTurn + 1);
    }
  }

  const mathButtons = (
    <>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={multiply}>*2</button>
      <button onClick={divide}>/2</button>
      <button onClick={changeNum}>New Game</button>
    </>
  );

  const mathButtonsDisabled = (
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
      <button disabled onClick={changeNum}>
        New Number
      </button>
    </>
  );

  function displayScores() {
    let scoresStr = "";
    scores.forEach((score) => (scoresStr += `${score} -> `));
    return scoresStr;
  }

  function logOut() {
    const newArr = [...props.connected];
    newArr.splice(props.index, 1);
    props.setConnected(newArr);
  }

  function changeNum() {
    setSteps(steps + 1);
    setNum(rndNum);
  }
  return (
    <div className={styles.playerBoard}>
      <h2>{props.user.userName}</h2>
      <h3>{num}</h3>
      {props.hasStartedGame && props.userTurn === props.index
        ? mathButtons
        : mathButtonsDisabled}
      <h4>steps : {steps}</h4>
      <h4>score : {displayScores()}</h4>
      <span>
        <button onClick={logOut}>Log Out</button>
      </span>
    </div>
  );
};

export default UserBoard;
