import React from "react";
import questionMark from "../assets/question_mark.webp";

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
          onClick={() => handleOpenModal()}
          onKeyDown={(e) => {
            if (e.key === "Enter") return handleOpenModal;
          }}
          tabindex={isOpenModal ? "-1" : "0"}
          role="button"
          aria-label="gameplay instructions"
        >
          <img className="question-mark-img" src={questionMark} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
