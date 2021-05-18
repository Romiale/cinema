import React from 'react'
import CardTreeBestMovies from '../components/CardTreeBestMovies'
import { } from "module";


function TreeBestMovies({ treeFirtsMovies }) {

    return (
        <>
            {
                treeFirtsMovies.map(movie => {
                    return (
                        <CardTreeBestMovies key={movie.id} movie={movie} />
                    )
                })
            }
        </>
    )
}

export default TreeBestMovies

