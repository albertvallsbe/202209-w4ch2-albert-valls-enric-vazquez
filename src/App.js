import { useState } from "react";
import GuessLetters from "./components/GuessLetters/GuessLetters";
import Hangman from "./components/Hangman/Hangman";
import Letters from "./components/Letters/Letters";
import Result from "./components/Result/Result";
import UsedLetters from "./components/UsedLetters/UsedLetters";
import getGuessWord from "./data/getGuessWord";

const App = () => {
  const [guessLetters] = useState(getGuessWord());
  const [usedLetters] = useState([]);

  return (
    <>
      <div className="container">
        <div className="main-container">
          <UsedLetters usedLetters={usedLetters} />
          <Hangman />
        </div>
        <GuessLetters guessLetters={guessLetters} />
        <Result />
        <Letters />
      </div>
    </>
  );
};

export default App;
