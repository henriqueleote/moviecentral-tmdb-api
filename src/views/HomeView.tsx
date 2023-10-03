import React, { useEffect, useState } from "react";
import { DisplayMedium } from 'baseui/typography'
//import {List, ListItem, ListItemLabel} from 'baseui/list'
import MovieCard from '../components/movie/MovieCard';
import { fetchMovies, searchMovie } from "../services/ApiService";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import 'bootstrap/dist/css/bootstrap.min.css';



// const HomeView: React.FC = () => {
//  const movies = [
//      {title: 'movie1', id: 1},
//      {title: 'movie2', id: 2},
//  ]


//     return(
//         <div>
//             <h1>movie list</h1>
//             <MovieList movies={movies}/>
//         </div>
//     )
// }

const HomeView: React.FC = () => {

    const [movies, setMovies] = useState([]);
    const [value, setValue] = React.useState("");

    const getAllMovies = () => {
        fetchMovies()
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    const searchMovies = () => {
        if (value == "") {
            getAllMovies();
        } else {
            searchMovie(value)
                .then((data) => setMovies(data))
                .catch((error) => console.error(error));
        }
    }

    const filteredMovies = movies.filter((movie) => movie.backdrop_path !== null);

    return (
        <div style={styles.mainWrapper}>
            <h1 style={styles.title}>Simple API Website</h1>
            <div className="container">
                <div style={{ display: "flex", marginTop: "20px",}}>
                    <div style={styles.searchBar}>
                    <Input
                        size={"default"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Harry Potter"
                        clearOnEscape
                        clearable
                    />
                    </div>

                    <Button onClick={() => searchMovies()}>Search</Button>
                </div>
            </div>
            <div className="container"  style={styles.container}>
                <div className="row">
                    {
                    filteredMovies.map((movie) => (
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

    title:{
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
        marginTop: "50px"
    },

    col: {
        marginBottom: "30px"
    }
};

export default HomeView;