import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Casting from '../components/Casting';


function CastingList({ movieId }) {
    const [castingList, setCastingList] = useState([])

    useEffect(() => {
        const getListOfMovieCasting = async () => {
            const resultListOfCasting = await axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
            setCastingList(resultListOfCasting.data.cast)
        }
        getListOfMovieCasting()

    }, [movieId]);

    return (
        <>
            {
                castingList.map(person => {
                    return <Casting key={person.id} person={person} />
                })
            }
        </>
    )
}

export default CastingList
