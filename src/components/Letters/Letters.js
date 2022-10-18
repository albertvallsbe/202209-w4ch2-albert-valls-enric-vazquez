import englishLetters from "../../data/englishLetters";
import "./Letters.css";

const Letters = () => {
  return (
    <ul className="letters">
      {englishLetters.map((letter, key) => (
        <li key={key} className="letter">
          <a href={letter.toLowerCase()}>{letter}</a>
        </li>
      ))}
    </ul>
  );
};

export default Letters;
