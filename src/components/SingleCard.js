import React from "react";
import "../styles/general.css";

const SingleCard = ({ cardObject, shuffler, updater, isOpenModal }) => {
  const clickHandler = () => {
    shuffler();
    updater(cardObject.idx);
  };

  return (
    <button
      className="single-card"
      id={cardObject.idx}
      onClick={() => clickHandler()}
      onKeyDown={(e) => {
        if (e.key === "Enter") return clickHandler;
      }}
      tabindex={isOpenModal ? "-1" : "0"}
    >
      <div className="card-img-container">
        <img className="card-img" src={cardObject.img} alt={cardObject.title} />
      </div>
      <div className="card-title">{cardObject.title}</div>
    </button>
  );
};

export default SingleCard;
