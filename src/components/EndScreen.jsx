import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1> پایان کوییز </h1>
      <h3>{userName}</h3>
      <h1>
        {Questions.length} / {score}
      </h1>
      <button onClick={restartQuiz}>  شروع دوباره </button>
    </div>
  );
};

export default EndScreen;
