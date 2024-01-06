import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
//c48fccb0
const API_KEY = 'c48fccb0';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        const result = data.Search;
        setMovies(result);
    }

    useEffect(() => {
        searchMovies('harry potter');
    
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="search"
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }} 
                />
            </div>
            {
            movies?.length > 0 
            ?
            (<div className="container">
              {movies.map((movie) => <MovieCard movie={movie} />)}
            </div>)
            :
            (<div className="empty"> <h1>No movies found</h1></div>)
            }
        
        </div>
    );
}
export default App