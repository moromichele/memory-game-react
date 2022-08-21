import React from "react";
import questionMark from "../assets/question_mark.png";

const ScoreBoard = ({ currScore, bestScore, toggleModal }) => {
  const handleOpenModal = () => {
    toggleModal();
  };

  return (
    <div className="score-board">
      <div className="score-board-flex">
        <p>{`Score: ${currScore}`}</p>
        <p>{`Best score: ${bestScore}`}</p>
        <div
          className="question-mark-container"
          onClick={() => handleOpenModal()}
        >
          <img
            className="question-mark-img"
            src={questionMark}
            alt="Instructions"
          />
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
