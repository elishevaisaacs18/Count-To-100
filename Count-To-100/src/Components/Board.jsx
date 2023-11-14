import styles from "../Board.module.css";
import UserBoard from "./UserBoard";
import { useState } from "react";

const Board = (props) => {
  const [bestScores, setBestScores] = useState([
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  ]);
  const [displayScores, setDisplayScores] = useState(false);

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
        setConnected={props.setConnected}
        findBestScores={findBestScores}
      />
    );
  }

  function findBestScores() {
    let tempBestScores = [...bestScores];
    for (const key of Object.keys(localStorage)) {
      const currUser = JSON.parse(localStorage.getItem(key));
      console.log("hereeee", currUser);
      let averageScore = findAverage(currUser.scores);
      if (currUser.scores != []) {
        for (let i = 0; i < tempBestScores.length; i++) {
          const currAvgScore = tempBestScores[i];
          if (currAvgScore === averageScore) {
            return;
          }
        }
        if (averageScore !== 0) {
          if (averageScore < tempBestScores[0]) {
            tempBestScores[2] = tempBestScores[1];
            tempBestScores[1] = tempBestScores[0];
            tempBestScores[0] = averageScore;
          } else if (averageScore < tempBestScores[1]) {
            tempBestScores[2] = tempBestScores[1];
            tempBestScores[1] = averageScore;
          } else if (averageScore < tempBestScores[2]) {
            tempBestScores[2] = averageScore;
          }
        }
      }
    }
    setBestScores(tempBestScores);
    console.log("tempBestScores: ", tempBestScores);
    setDisplayScores(true);
  }

  function findAverage(scores) {
    let sum = 0;
    scores.forEach((score) => {
      sum += score;
    });
    return Math.floor(sum / scores.length);
  }
  return (
    <div className={styles.boardContainer}>
      <h1>Count To 100</h1>
      {props.hasStartedGame ? (
        <button disabled>Start Game</button>
      ) : (
        <button onClick={handleStartGame}>Start Game</button>
      )}
      <button onClick={findBestScores}>Show newest Scores:</button>
      {displayScores ? (
        <>
          <h3>first place: {bestScores[0]}</h3>
          <h4>second place: {bestScores[1]}</h4>
          <h5>third place: {bestScores[2]}</h5>
        </>
      ) : null}
      <div className={styles.boardsCon}>{boardsArr}</div>
    </div>
  );
};

export default Board;
