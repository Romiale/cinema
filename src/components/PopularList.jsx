import React, { useContext } from 'react';
import { PopularContext } from '../components/Contexts';
import CardMovie from '../components/CardMovie';




function PopularList() {
    const popularMovies = useContext(PopularContext);
    return (
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                popularMovies.map(popularMovie => {
                    return <CardMovie key={popularMovie.id} Movie={popularMovie} />
                })
            }
        </div>
    )
}

export default PopularList
