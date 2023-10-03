import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';

const styles = {
  movieTitle: {
    marginTop: "10%"
  },
  starContainer: {
    position: "absolute",
    bottom: "5%",
    left: "0",
    right: "0"
  },
  image: {
    width: "200px",
    height: "300px",
  },
  rating: {
    margin: "auto",
    display: "block"
  }
};

const MovieCard: React.FC<{ movie: any }> = ({ movie }) => {
  // Create the image source URL
  const imgSrc = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="image-container">
        {/* Movie poster image */}
        <img src={imgSrc} style={styles.image} alt={movie.original_title} />

        {/* Overlay with movie title and rating */}
        <div className="overlay">
          <h4 style={styles.movieTitle}>{movie.original_title}</h4>
          <div style={styles.starContainer}>
            {/* Movie rating with star */}
            <Rating
              initialValue={Math.round(movie.vote_average / 2)}
              readonly={true}
              size={20}
              style={styles.rating}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
