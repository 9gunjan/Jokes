import React, { useEffect, useState } from "react";
import "../styles/jokes.css";

const JokeCard = ({ jokeData }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [jokeData]);

  return (
    <div className="joke-card">
      <h1 className="joke-setup">{jokeData?.setup}</h1>
      {!showAnswer && (
        <button className="show-btn" onClick={() => setShowAnswer(true)}>
          Show Punchline
        </button>
      )}
      <p className={`joke-punchline ${showAnswer ? "visible" : ""}`}>
        {jokeData?.punchline}
      </p>
    </div>
  );
};

export default JokeCard;
