import React, { useContext } from 'react';
import { UpcomingContext } from '../components/Contexts';
import CardMovie from '../components/CardMovie';




function UpcommingList() {
    const upcomingMovies = useContext(UpcomingContext);
    return (
        <div className="d-flex justify-content-evenly flex-wrap">
            {
                upcomingMovies.map(upcomingMovie => {
                    return <CardMovie key={upcomingMovie.id} Movie={upcomingMovie} />
                })
            }
        </div>
    )
}

export default UpcommingList
