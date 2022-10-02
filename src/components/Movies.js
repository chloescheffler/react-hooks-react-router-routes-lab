import React from "react";
import { movies } from "../data";


function Movies() {
  const movieCard = movies.map((movie) => {
    return (
      <div>
        <p><strong>Name: {movie.title}</strong></p>
        <p>Time: {movie.time}</p>
        <ul>
          {movie.genres.map((genre, index) => {
            return (
              <li key={index}>
                {genre}
              </li>
            )
          })}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {movieCard}
   </div>
 
};

export default Movies;
