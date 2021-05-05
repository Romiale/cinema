import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardMovieModal from '../components/CardMovieModal';



function SimilarList() {

    const [similarList, setSimilarList] = useState()

    useEffect(() => {
        const similarMoviesFromApi = (async () => {
            const data = await axios('https://api.themoviedb.org/3/movie/' + { movieId } + '/similar?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1');
            setSimilarList(data);
        })
        similarMoviesFromApi()
    }, [])

    return (
        <div>
            {
                similarList.map(similarMovie => {
                    return <CardMovieModal similarMovie={similarMovie} />
                })
            }
        </div>
    )
}

export default SimilarList
