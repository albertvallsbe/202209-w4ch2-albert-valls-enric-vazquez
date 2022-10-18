import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import arrayWords from "./data/randomWords";

const App = () => {
  const guessedWord = arrayWords[Math.floor(Math.random() * arrayWords.length)];
  const guessedLetters = guessedWord.split("").map((letter) => {
    return { letter, hidden: true };
  });

  const [usedLetters] = useState([]);
  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters usedLetters={usedLetters} />
          <Hangman />
        </div>
        <GuessLetters guessedLetters={guessedLetters} />
        <Result />
        <Letters />
      </div>
    </>
  );
};

export default App;
