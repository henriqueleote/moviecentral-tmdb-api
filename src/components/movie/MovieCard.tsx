import React from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating'

const styles = {

    movieTitle: {
        marginTop: "10%"
    },

    starContainer: {
        position: "absolute",
        bottom: "5%",
        left: "0",
        right: "0"
    }
};

const MovieCard: React.FC = ({ movie }) => {
    console.log(movie);
    const imgSrc = "https://image.tmdb.org/t/p/w342/" + movie.poster_path;
    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="image-container">
                <img src={imgSrc} style={{ width: "200px", height: "300px" }} />
                <div className="overlay">
                    <h4 style={styles.movieTitle}>{movie.original_title}</h4>
                    <div style={styles.starContainer}>
                        <Rating
                            initialValue={Math.round(movie.vote_average / 2)}
                            readonly={true}
                            size={20}
                            style={{ margin: "auto", display: "block" }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}


export default MovieCard;