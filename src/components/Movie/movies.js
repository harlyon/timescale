import React from "react";
import { Styled } from "./movie.styles";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movies = ({ title, poster_path, overview, vote_average, id }) => {
  return (
    <Styled>
      <div className="container">
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://images.unsplash.com/photo-1576788445812-0933cb14461f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllJTIwcGxhY2Vob2xkZXJ8ZW58MHwxfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
          alt="title"
          className="movie-poster"
        />
        <div className={"movie-rating"}>{vote_average}</div>
        <div className="movie-title">{title}</div>
      </div>
    </Styled>
  );
};

export default Movies;
