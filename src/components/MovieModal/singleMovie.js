import React from "react";
import moment from "moment";
import { Styled } from "./modal.styles";

const MovieModal = ({ movieInfo, showMovieInfo, handleModalClose }) => {
  if (!movieInfo) return null;
  const {
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    vote_count,
  } = movieInfo;
  const imgUrl = `https://image.tmdb.org/t/p/w1280/${poster_path}`;

  const onModalClose = () => {
    handleModalClose();
  };
  return (
    <Styled isModalOpen={showMovieInfo}>
      <div id="movieInfo" className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-header__title">{title}</div>
            <div className="modal-header__closeBtn" onClick={onModalClose}>
              <span className="close">X</span>
            </div>
          </div>
          <div className="modal-body">
            <div>
              <img src={imgUrl} alt={title} className="modal-body__poster" />
            </div>
            <div className="modal-body__desc">
              <p className="desc-date">
                Release date: {moment(release_date).format("MMMM d, YYYY")}
              </p>
              <p className="desc-note">{overview}</p>
              <p>
                <span className="desc-rating">{vote_average}</span> / 10 (
                {vote_count} total votes)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default MovieModal;
