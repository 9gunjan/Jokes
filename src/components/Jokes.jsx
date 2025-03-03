import React, { useEffect, useState } from "react";

import "../styles/jokes.css";
import JokeCard from "./JokeCard";
const Jokes = () => {
  const [joke, setJoke] = useState({});

  const getJokeClickHandler = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const jokeData = await response.json();
    console.log(jokeData);
    setJoke(jokeData);
  };

  useEffect(() => {
    getJokeClickHandler();
  }, []);

  return (
    <div className="full-container">
      <JokeCard jokeData={joke} />
      <div style={{ marginTop: "20px" }}>
        <button className="getJokeBtn" onClick={getJokeClickHandler}>
          Get joke
        </button>
      </div>
    </div>
  );
};

export default Jokes;
