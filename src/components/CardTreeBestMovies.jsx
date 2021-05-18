import React from 'react'
import heart from '../icons/heart.svg';

function CardTreeBestMovies({ movie }) {
    return (
        <div key={movie.id} data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + movie.id}>
            <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="bg" className="w-100 rounded-2" />
            <div>
                <p>{movie.title ? movie.title : movie.name}</p>
                <p>{movie.overview}</p>
                <span> <img src={heart} alt="heart" /></span>
            </div>
        </div>
    )
}

export default CardTreeBestMovies
