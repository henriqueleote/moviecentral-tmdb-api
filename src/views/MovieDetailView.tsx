import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { fetchMovieById } from '../services/ApiService';

const MovieDetailView: React.FC = () => {
    const {id} = useParams<{id:string}>();

    const [movieData, setMovie] = useState([]);

    useEffect(() => {
        fetchMovieById(id)
        .then((data) => setMovie(data))
        .catch((error) => console.error(error));
    },[])

    return (
        <div>
            <h1>{movieData.title}</h1>
            <p>{id}</p>
        </div>
    )
}

export default MovieDetailView;