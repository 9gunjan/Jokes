import React from "react";
import "../styles/Card.css";

const Chip = ({ genreName }) => {
  return <span className="chip">{genreName}</span>;
};
const Card = ({ props }) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://picsum.photos/200/300"
        alt={props.name}
        className="card-image"
      ></img>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-overview">{props.overview}</p>

      <span className="chip-container">
        {props.genre.split(",").map((item, index) => (
          <Chip key={index + item} genreName={item} />
        ))}
      </span>
      <div className="card-rating">
        <span className="imdbRating">⭐{props.imdb_rating}</span>
        <span className="votes"> ({props.no_of_votes})</span>
      </div>
      <div className="card-footer">
        <span>{props.runtime_of_series}</span>
        <span>{props.runtime_of_episodes}</span>
      </div>
    </div>
  );
};

export default Card;
