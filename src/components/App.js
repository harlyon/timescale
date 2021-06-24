import { useState, useEffect } from "react";
import { Styled } from "./App.styles";
import { FEATURED_API, SEARCH_API } from "../config";
import Movies from "../components/Movie/movies";
import MovieModal from "./MovieModal/singleMovie";
import Nav from "./Nav/nav";
import Spinner from "./Spinner/spinner";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
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
        {loading && <Spinner />}
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
