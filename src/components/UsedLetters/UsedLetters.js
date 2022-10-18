import "./UsedLetters.css";

const UsedLetters = ({ usedLetters = [] }) => {
  return (
    <section className="used-letters-container">
      <h2>Used letters</h2>
      <ul className="used-letters">
        {usedLetters.map((letter, position) => {
          if (usedLetters.length - 1 === position) {
            return <li className="used-letter">{letter}</li>;
          }
          return <li className="used-letter">{letter},&nbsp;</li>;
        })}
      </ul>
    </section>
  );
};

export default UsedLetters;
