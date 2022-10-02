import React from "react";
import { actors } from "../data";

function Actors() {
  const actorCard = actors.map((actor) => {
    return (
      <div>
        <p><strong>Name: {actor.name}</strong></p>
        <p>Movies: </p>
        <ul>
          {actor.movies.map((movies, index) => {
            return (
              <li key={index}>
                {movies}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Actors Page</h1>
    {actorCard}
    </div>;
}

export default Actors;
