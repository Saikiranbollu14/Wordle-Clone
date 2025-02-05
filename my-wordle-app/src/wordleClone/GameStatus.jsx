import React from 'react';

const GameStatus = ({ gameStatus, secretWord }) => {
  if (gameStatus === 'won') {
    return <p className="text-green-500 text-center text-xl">You win!</p>;
  } else if (gameStatus === 'lost') {
    return <p className="text-red-500 text-center text-xl">Game Over! The word was: {secretWord}</p>;
  }
  return null;
};

export default GameStatus;
