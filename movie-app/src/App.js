import "./App.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
//c032e2d7

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const API_URL = " http://www.omdbapi.com?apikey={Add API Key hear}";

  // const movie1 = {
  //   Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  //   Year: "2007",
  //   imdbID: "tt1132238",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
  // };

  const searchMovie = async (title) => {
    console.log("title : ", title);

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log("data : ", data);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie(searchTerm);
  }, []);
  return (
    <div className="app">
      <h1>MovieWorld</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
