import randomWords from "./randomWords";

const getGuessWord = () => {
  const guessedWord =
    randomWords[Math.floor(Math.random() * randomWords.length)];
  const guessLetters = guessedWord.split("").map((letter) => {
    return { letter, hidden: true };
  });

  return guessLetters;
};

export default getGuessWord;
