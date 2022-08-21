import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard.js";
import ScoreBoard from "./ScoreBoard.js";
import MyModal from "./MyModal.js";

import mario from "../assets/mario.png";
import luigi from "../assets/luigi.png";
import wario from "../assets/wario.png";
import waluigi from "../assets/waluigi.png";
import peach from "../assets/peach.png";
import toad from "../assets/toad.png";
import yoshi from "../assets/yoshi.png";
import bowser from "../assets/bowser.png";
import dk from "../assets/dk.png";
import goomba from "../assets/goomba.png";
import koopa from "../assets/koopatroopa.png";
import piranha from "../assets/piranha.png";

const GameBoard = () => {
  const card = (img, title, idx) => {
    return { img, title, idx };
  };
  let cards = [
    card(mario, "Super mario", 0),
    card(luigi, "Luigi", 1),
    card(peach, "Peach", 2),
    card(bowser, "Bowser", 3),
    card(koopa, "Koopa Troopa", 4),
    card(toad, "Toad", 5),
    card(dk, "Donkey Kong", 6),
    card(goomba, "Goomba", 7),
    card(yoshi, "Yoshi", 8),
    card(wario, "Wario", 9),
    card(waluigi, "Waluigi", 10),
    card(piranha, "Piranha Plant", 11),
  ];

  const winModal = {
    title: "You won!",
    content: "",
  };

  const loseModal = {
    title: "You lost!",
    content:
      "Hint: try to group some characters by color, name, or some other characteristic!",
  };

  const infoModal = {
    title: "How to play",
    content:
      "Press as many cards as you can without repeating. If you click the same card twice, you lose. If you click all the cards once, you win!",
  };

  const [randBoardArr, setRandBoardArr] = useState(cards);
  const [scoreMap, setScoreMap] = useState(new Array(cards.length).fill(0));
  const [bestScore, setBestScore] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalObj, setModalObj] = useState({
    title: "placeholder title",
    content: "placeholder content",
  });

  let currScore = scoreMap.filter((x) => x === 1).length;

  useEffect(() => {
    shuffleArray(cards, setRandBoardArr);
  }, []);

  useEffect(() => {
    const max = Math.max(currScore, bestScore);
    setBestScore(max);
    if (currScore === cards.length) {
      handleToggleModal(winModal);
      setScoreMap(new Array(cards.length).fill(0));
    }
  }, [currScore]);

  /* Randomizes array using Durstenfeld shuffle algorithm */
  const shuffleArray = (array, setter) => {
    console.log("shuffling");
    let arrCopy = [...array];
    for (var i = arrCopy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arrCopy[i];
      arrCopy[i] = arrCopy[j];
      arrCopy[j] = temp;
    }
    setter(arrCopy);
  };

  const updateScoreMap = (n) => {
    let x = [...scoreMap];
    if (x[n] === 1) {
      handleToggleModal(loseModal);
      setScoreMap(new Array(cards.length).fill(0));
    } else {
      x[n] = 1;
      setScoreMap(x);
    }
  };

  const handleToggleModal = (obj) => {
    setModalObj(obj);
    setIsOpenModal((now) => {
      return !now;
    });
  };

  return (
    <main className="game-board">
      <div className="cards-container">
        {randBoardArr.map((c) => {
          return (
            <SingleCard
              key={c.idx}
              cardObject={c}
              shuffler={() => shuffleArray(cards, setRandBoardArr)}
              updater={updateScoreMap}
              isOpenModal={isOpenModal}
            />
          );
        })}
      </div>
      <ScoreBoard
        currScore={currScore}
        bestScore={bestScore}
        toggleModal={() => handleToggleModal(infoModal)}
        isOpenModal={isOpenModal}
      />
      <MyModal
        isOpen={isOpenModal}
        toggleModal={() => handleToggleModal()}
        modalObj={modalObj}
      />
    </main>
  );
};

export default GameBoard;
