import React from "react";
import "../styles/general.css";

const SingleCard = ({ cardObject, shuffler, updater }) => {
  const clickHandler = () => {
    shuffler();
    updater(cardObject.idx);
  };

  return (
    <div
      className="single-card"
      id={cardObject.idx}
      onClick={() => clickHandler()}
    >
      <div className="card-img-container">
        <img className="card-img" src={cardObject.img} alt={cardObject.title} />
      </div>
      <div className="card-title">{cardObject.title}</div>
    </div>
  );
};

export default SingleCard;
