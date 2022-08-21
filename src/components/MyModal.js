import React from "react";

const MyModal = ({ isOpen, toggleModal, modalObj }) => {
  if (!isOpen) {
    return <></>;
  } else {
    return (
      <div className="modal-overlay">
        <div className="modal-body">
          <h1>{modalObj.title}</h1>
          <p className="modal-content">{modalObj.content}</p>
          <button class="play-button" onClick={toggleModal} >
            PLAY
          </button>
        </div>
      </div>
    );
  }
};

export default MyModal;
