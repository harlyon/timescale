export const REACT_APP_API_DOMAIN = "https://api.themoviedb.org/3";

export const REACT_APP_MOVIE_DB_API_KEY = "";

export const FEATURED_API = `${REACT_APP_API_DOMAIN}/discover/movie?api_key=${REACT_APP_MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export const SEARCH_API = `${REACT_APP_API_DOMAIN}/search/movie?&api_key=${REACT_APP_MOVIE_DB_API_KEY}&query=`;
