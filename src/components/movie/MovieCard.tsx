import React from "react";
import {Link} from 'react-router-dom'

interface MovieCardProps {
    movie: {
        id: number;
        title: string;
        vote_average: number;
        poster_path: string;
    }
}

const styles = {
    movieCard:{
        display: 'block',
    },
    movieTitle:{
        color:"white"
    },
    movieVotes:{
        color: "white"
    },
    movieImage:{
        width: "150px",
        height: "auto"
    }
  };

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const imgSrc = "https://image.tmdb.org/t/p/w342/" + movie.poster_path;
    return (
        <Link to={`/movie/${movie.id}`}>
            <div>
            {/* <h5 style={{color: "white"}}>{movie.title}</h5> */}
            
            <div style={styles.movieCard}>
                <img style={styles.movieImage} src={imgSrc}/>
                <br></br>
                <span style={styles.movieTitle}>{movie.title}</span>
                <span style={styles.movieVotes}>{movie.vote_average}</span>
            </div>
        </div>
        </Link>
    )
}


export default MovieCard;