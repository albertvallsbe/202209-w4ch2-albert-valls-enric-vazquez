import "./GuessLetters.css";

const GuessLetters = ({ guessLetters }) => {
  return (
    <ul className="guess-letters">
      {guessLetters.map((guessLetter, key) => {
        if (guessLetter.hidden) {
          return <li key={key} className="guess-letter empty"></li>;
        }

        return (
          <li key={key} className="guess-letter">
            {guessLetter.letter}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessLetters;
