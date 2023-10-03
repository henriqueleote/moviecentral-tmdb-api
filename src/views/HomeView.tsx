import React, { useEffect, useState } from "react";
import { DisplayMedium } from 'baseui/typography'
//import {List, ListItem, ListItemLabel} from 'baseui/list'
import MovieCard from '../components/movie/MovieCard';
import { fetchMovies, searchMovie } from "../services/ApiService";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import {Grid, Cell} from 'baseui/layout-grid';


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

    useEffect(() => {
        fetchMovies()
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }, [])

    const method = () => {
        searchMovie(value)
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
    }

    return (
        <div>
            <div style={{width: "300px", display:"flex"}}>
            <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Harry Potter"
                clearOnEscape
                clearable
            />
            <Button onClick={() => method()}>Search</Button>
            </div>

            <DisplayMedium>
                Movie list
            </DisplayMedium>
            <Grid>
            {movies.map((movie) => (
                <Cell span={3}>
                    <MovieCard key={movie.id} movie={movie} />
                </Cell>
                
            ))}
                
            </Grid>
            

        </div>
    )
}

const styles = {
    searchBar:{
        width: '300px',
    },
  };

export default HomeView;