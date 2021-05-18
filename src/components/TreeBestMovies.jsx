import React from 'react'
import CardTreeBestMovies from '../components/CardTreeBestMovies'


function TreeBestMovies({ treeFirtsMovies }) {

    return (
        <>
            {
                treeFirtsMovies.map(movie => {
                    return (
                        <CardTreeBestMovies movie={movie} />
                    )
                })
            }
        </>
    )
}

export default TreeBestMovies

