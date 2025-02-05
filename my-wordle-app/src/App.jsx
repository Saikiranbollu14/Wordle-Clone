import React, { useState, useEffect } from 'react';
import Grid from '../src/wordleClone/Grid';
import GuessForm from '../src/wordleClone/GuessForm';
import GameStatus from '../src/wordleClone/GameStatus';
import NewGameButton from '../src/wordleClone/NewGameButton';

const App = () => {
  const wordList = ['apple', 'grape', 'mango', 'peach', 'berry']; 
  const [secretWord, setSecretWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [gameStatus, setGameStatus] = useState('playing'); 

  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setSecretWord(randomWord);
  }, []);

  const handleGuess = (guess) => {
    if (guesses.includes(guess)) return; 
    if (guess.length !== 5 || !wordList.includes(guess)) return; 

    setGuesses([...guesses, guess]);
    setRemainingAttempts(remainingAttempts - 1);

    if (guess === secretWord) {
      setGameStatus('won');
    } else if (remainingAttempts === 1) {
      setGameStatus('lost');
    }
  };

  const restartGame = () => {
    setSecretWord(wordList[Math.floor(Math.random() * wordList.length)]);
    setGuesses([]);
    setRemainingAttempts(6);
    setGameStatus('playing');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
    <div className="max-w-xl p-4 bg-white shadow-lg rounded-lg w-full">
      <h1 className="text-3xl font-bold text-center mb-4">Wordle Game</h1>
      <Grid guesses={guesses} secretWord={secretWord} />
      <GameStatus gameStatus={gameStatus} secretWord={secretWord} />
      <GuessForm handleGuess={handleGuess} />
      <NewGameButton restartGame={restartGame} />
    </div>
  </div>
  );
};

export default App;
