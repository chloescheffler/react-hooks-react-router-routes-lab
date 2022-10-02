import React from "react";
import { directors } from "../data";

function Directors() {
  const directorCard = directors.map((director, index) => {
    return (
      <div>
        <p><strong>Name: {director.name}</strong></p>
        <p>Movies: </p>
        <ul key={index}>
          {director.movies.map((movies) => {
            return ( 
              <li>
                {movies}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {directorCard}
  </div>;
}

export default Directors;
