import React, { useEffect, useState } from "react";
import MovieCard from '../components/movie/MovieCard';
import { fetchMovies, searchMovie } from "../services/ApiService";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = React.useState("");

  // Function to fetch all movies
  const getAllMovies = () => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    // Fetch all movies when the component mounts
    getAllMovies();
  }, []);

  // Function to search movies by name
  const searchMovies = () => {
    if (!value.trim()) {
      // If the search input is empty, fetch all movies
      getAllMovies();
    } else {
      // Otherwise, search for movies by name
      searchMovie(value)
        .then((data) => setMovies(data))
        .catch((error) => console.error(error));
    }
  }

  // Handle Enter key press in the search input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchMovies();
    }
  };

  // Filter movies to exclude those with no poster
  const filteredMovies = movies.filter((movie) => movie.backdrop_path !== null);

  return (
    <div style={styles.mainWrapper}>
      <h1 style={styles.title}>MovieCentral using TMDB API</h1>
      <div className="container">
        <div style={styles.searchContainer}>
          <div style={styles.searchBar}>
            <Input
              size={"default"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search for movies"
              onKeyPress={handleKeyPress}
              clearOnEscape
              clearable
            />
          </div>
          <Button onClick={searchMovies}>Search</Button>
        </div>
      </div>
      <div className="container" style={styles.container}>
        <div className="row">
          {filteredMovies.map((movie) => (
            <div className="col-sm-2" style={styles.col} key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  title: {
    marginTop: "20px",
    textAlign: "center",
    color: "white"
  },
  searchBar: {
    width: '300px',
    marginRight: "10px"
  },
  mainWrapper: {
    padding: "20px",
    backgroundColor: "#111"
  },
  container: {
    marginTop: "30px"
  },
  col: {
    marginBottom: "30px"
  },
  searchContainer: {
    display: "flex",
    marginTop: "20px",
  },
};

export default HomeView;
