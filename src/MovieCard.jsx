import React from 'react'

const MovieCard = ({moviesData}) => {
  return (
    <div className="movie">
        <div>
            <p>{moviesData.Year}</p>
        </div>
                    
        <div>
            <img src={moviesData.Poster !== "N/A" ? moviesData.Poster : "https://via.placeholder.com/400"} alt={"Movie Poster"}/>
        </div>

        <div>
            <span>{moviesData.Type}</span>
            <h3>{moviesData.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard