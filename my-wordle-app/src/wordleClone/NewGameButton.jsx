import React from 'react';

const NewGameButton = ({ restartGame }) => (
  <div className="mt-4 text-center">
    <button onClick={restartGame} className="px-4 py-2 bg-yellow-500 text-white rounded">
      Start New Game
    </button>
  </div>
);

export default NewGameButton;
