import "./GuessLetters.css";

const GuessLetters = ({ guessLetters }) => {
  return (
    <ul className="guess-letters">
      <li className="guess-letter empty"></li>
      <li className="guess-letter">A</li>
      <li className="guess-letter empty"></li>
      <li className="guess-letter">A</li>
      <li className="guess-letter empty"></li>
    </ul>
  );
};

export default GuessLetters;
