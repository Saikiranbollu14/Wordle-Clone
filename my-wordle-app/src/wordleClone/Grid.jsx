import React from 'react';

const Grid = ({ guesses, secretWord }) => {
  // Function to get feedback for each letter
  const getLetterFeedback = (letter, index) => {
    if (secretWord[index] === letter) {
      return 'bg-green-500'; // Correct letter, correct position
    } else if (secretWord.includes(letter)) {
      return 'bg-yellow-500'; // Correct letter, wrong position
    }
    return 'bg-gray-500'; // Incorrect letter
  };

  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {guesses.map((guess, guessIndex) => (
        <div key={guessIndex} className="flex space-x-2">
          {guess.split('').map((letter, index) => (
            <div
              key={index}
              className={`w-12 h-12 flex justify-center items-center text-xl font-bold text-white rounded ${getLetterFeedback(letter, index)}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
      {[...Array(6 - guesses.length)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-2">
          {[...Array(5)].map((_, colIndex) => (
            <div key={colIndex} className="w-12 h-12 border border-gray-300 rounded" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
