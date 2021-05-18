import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardMovieModal from '../components/CardMovieModal';



function SimilarList({ movieId }) {

    const [similarList, setSimilarList] = useState([])

    useEffect(() => {

        const similarMoviesFromApi = async () => {
            const resultSimilarMovies = await axios(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1`)
            setSimilarList(resultSimilarMovies.data.results);
        }
        similarMoviesFromApi()

    }, [movieId])


    return (
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                similarList.map(similarMovie => {
                    return <CardMovieModal key={similarMovie.id} similarMovie={similarMovie} />
                })
            }
        </div>
    )
}

export default SimilarList
