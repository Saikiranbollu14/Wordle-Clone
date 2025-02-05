import React, { useState } from 'react';

const GuessForm = ({ handleGuess }) => {
  const [guess, setGuess] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleGuess(guess.toLowerCase());
    setGuess('');
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength="5"
        className="border border-gray-300 rounded p-2 w-full text-center text-xl"
        placeholder="Enter 5-letter word"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white w-full rounded">
        Guess
      </button>
    </form>
  );
};

export default GuessForm;
