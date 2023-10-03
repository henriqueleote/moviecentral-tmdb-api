import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/ApiService';

const MovieDetailView: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieById(id)
            .then((data) => setMovie(data))
            .catch((error) => console.error(error));
    }, [])

    return (
        <div>
            <div style={{
                ...style.background,
                backgroundImage: `url(${"https://image.tmdb.org/t/p/w342/" + movie.backdrop_path})`,
            }}>
            </div>
            <div style={style.container}>
                <div style={style.movieContainer}>

                    <div style={style.left}>
                        <div style={style.movieTitle}>{movie.title}</div>
                        <div style={style.categories}>
                            {/* {movie.genres.map((genre) => genre.name).join(', ')} */}
                        </div>
                        <div style={style.rating}>Rating: {movie.rating}</div>
                        <div style={style.description}>{movie.description}</div>
                        <a
                            href={movie.trailerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={style.watchButton}
                        >
                            Watch Trailer
                        </a>
                    </div>
                    <div style={style.right}>
                        <img
                            style={style.posterImage}
                            src={`${"https://image.tmdb.org/t/p/w342/" + movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

const style = {
    background: {
        filter: "blur(30px)",
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "fixed",
        zIndex: '-1',
    },

    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },

    movieContainer: {
        width: "800px",
        height: "500px",
        backgroundColor: "#1e1e1e",
        borderRadius: "20px",
        padding: "0px 0px 0px 20px",
        color: "white"
    },

    posterImage: {
        width: "250px",
        height: "auto",
        borderRadius: "20px"
    },

    left: {
        marginTop: "20px",
        width: "50%",
        height: "100%",
        float: "left"
    },

    right: {
        width: "40%",
        height: "100%",
        float: "right",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    movieTitle: {
        textTransform: "uppercase",
        fontFamily: 'Bebas Neue',
        fontSize: "45px"
    }
};

export default MovieDetailView;