import React from "react";
import questionMark from "../assets/question_mark.png";

const ScoreBoard = ({ currScore, bestScore, toggleModal, isOpenModal }) => {
  const handleOpenModal = () => {
    toggleModal();
  };

  return (
    <div className="score-board">
      <div className="score-board-flex">
        <p>{`Score: ${currScore}`}</p>
        <p>{`Best score: ${bestScore}`}</p>
        <button
          className="question-mark-container"
          onClick={isOpenModal ? "" : () => handleOpenModal()}
          tabindex={isOpenModal ? "-1" : "0"}
          aria-label="gameplay instructions"
        >
          <img className="question-mark-img" src={questionMark} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
