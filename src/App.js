import React, { useEffect } from "react"; 
import "./App.css"
import SearchIcon from "./search.svg"; 

// API Key:- 6171b493
// API:- http://www.omdbapi.com/?i=tt3896198&apikey=6171b493

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6171b493";

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const resp = await fetch(`${API_URL}&s=${title}`)
        const data = await resp.json(); 
        console.log(data.Search); 
    }

    useEffect(() => {  
        searchMovies("Spiderman"); 
    }, []) 

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input placeholder="Search For Movies" value="Superman" onChange={() => {}}/>    
                <img src={SearchIcon} onClick={() => {}} alt={"Search-icon-image"}/>
            </div>

            <div className="container">

            </div>
        </div>
    )
}

export default App; 