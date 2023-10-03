export const fetchMovies = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8246306bee45758b9cae4e0b6a240224&with_genres=28');
        if(!response.ok){
            throw new Error("Network response not ok");
        }
        const data = await response.json();
        return data.results;
};

export const fetchMovieById = async (movieId:number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8246306bee45758b9cae4e0b6a240224`);
        if(!response.ok){
            throw new Error("Network response not ok");
        }
        const data = await response.json();
        console.log(data)
        return data;
};

export const searchMovie = async (name:string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&api_key=8246306bee45758b9cae4e0b6a240224`);
        if(!response.ok){
            throw new Error("Network response not ok");
        }
        const data = await response.json();
        return data.results;
};