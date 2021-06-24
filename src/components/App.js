import { useState, useEffect } from "react";
import { Styled } from "./App.styles";
import Movies from "../components/Movie/movies";
import MovieModal from "./MovieModal/singleMovie";
import Nav from "./Nav/nav";

const REACT_APP_API_DOMAIN = "https://api.themoviedb.org/3";

const REACT_APP_MOVIE_DB_API_KEY = "";

const FEATURED_API = `${REACT_APP_API_DOMAIN}/discover/movie?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const SEARCH_API = `${REACT_APP_API_DOMAIN}/search/movie?&api_key=${REACT_APP_MOVIE_DB_API_KEY}&query=`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) {
      getMovies(SEARCH_API + search);
      setSearch("");
    }
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleModalClose = () => {
    setShowMovieInfo(false);
  };

  return (
    <Styled>
      <div className="container">
        <Nav
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          searchKey={search}
        />
        <div className="grid-container">
          {movies.length > 0 &&
            movies.map((movie) => (
              <div
                className="grid-card"
                onClick={() => {
                  setSelectedMovie(movie);
                  setShowMovieInfo(true);
                }}
              >
                <Movies {...movie} key={movie.id} />
              </div>
            ))}
        </div>
        <MovieModal
          showMovieInfo={showMovieInfo}
          movieInfo={selectedMovie}
          handleModalClose={handleModalClose}
        />
      </div>
    </Styled>
  );
};

export default App;
