import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/ApiService';
import { Rating } from 'react-simple-star-rating'

const MovieDetailView: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Fetch movie details when the component mounts
        fetchMovieById(id)
            .then((data) => setMovie(data))
            .catch((error) => console.error(error));
    }, [])

    const imdbLink = "https://idmb.com/title/" + movie.imdb_id;

    const handleClick = () => {
        alert('No trailer available.');
    };

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

                        <div style={style.ratingContainer}>
                            <Rating
                                initialValue={Math.round(movie.vote_average / 2)}
                                readonly={true}
                                size={25}
                                style={style.rating}
                            />
                            <a href={imdbLink} target="_blank" rel="noopener noreferrer" style={{ verticalAlign: "super" }}>
                                <img src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png" style={style.imdb} alt="" />
                            </a>
                        </div>
                        <div style={style.categories}>
                            {
                                movie.genres != undefined ? (movie.genres.map((genre) => genre.name).join(', '))
                                    : (<span></span>)
                            }
                        </div>
                        <p>{movie.overview}</p>
                        <p style={{ marginTop: "30px" }}>
                            {movie.video ? (
                                <a href={movie.video} target="_blank" rel="noopener noreferrer" style={style.trailerButton}>Watch trailer</a>
                            ) : <a onClick={handleClick} style={style.trailerDisabled} disabled>Watch trailer</a>}

                        </p>
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
        width: "60%",
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
    },

    categories: {
        fontSize: "15px",
        marginBottom: "20px",
        color: "darkgrey"
    },

    imdb: {
        verticalAlign: "middle",
        width: "40px",
        marginLeft: "10px"
    },

    trailerButton: {
        backgroundColor: "#199319",
        color: "white",
        padding: "15px 25px",
        textDecoration: "none",
        cursor: "pointer"
    },

    trailerDisabled: {
        backgroundColor: "grey",
        color: "white",
        padding: "15px 25px",
        textDecoration: "none",
        cursor: "default"
    },

    ratingContainer: {
        display: "inline-block"
    },

    rating: {
        margin: "auto",
        display: "block",
        verticalAlign: "middle"
    },
};

export default MovieDetailView;