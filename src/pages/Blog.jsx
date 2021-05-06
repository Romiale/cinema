import React, { useContext, useState } from 'react';
import { searchContext } from '../components/Contexts';
import styles from '../style/search.module.scss';
import Wrapper from '../components/Wrapper';
import CardMovie from "../components/CardMovie";

export default function Blog() {

    const foundMovies = useContext(searchContext);

    return (
        <div className={styles.search__page}>
            <h1 className="text-center">Search page</h1>

            <div className="d-flex justify-content-evenly flex-wrap mt-5">
                {

                    foundMovies ? foundMovies.map(movie => {
                        return <CardMovie key={movie.id} Movie={movie} />
                    }) : <h3>0 results found</h3>
                }
            </div>
        </div>
    )

}


