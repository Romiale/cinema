import React, { useState, useEffect } from 'react';
import styles from '../style/movies.module.scss';
import CardMovie from '../components/CardMovie';
import Footer from '../components/Footer';
import TreeBestMovies from '../components/TreeBestMovies'


export default function ActionMovies({ getMoviesByCategories, MoviesByGenre, genres }) {

    const getGenresMovies = (genreId, genreName) => {
        getMoviesByCategories(genreId)
        setGenreTitle(genreName);
    }


    const [genreTitle, setGenreTitle] = useState("")
    const [treeFirtsMovies, setTreeFirtsMovies] = useState([])


    useEffect(() => {
        const sortMovies = () => {
            const sortedMoovies = MoviesByGenre.sort((a, b) => {
                return b.vote_count - a.vote_count
            })
            setTreeFirtsMovies(sortedMoovies.slice(0, 3))
        }
        sortMovies()
    }, [MoviesByGenre]);


    return (
        <div className={styles.body}>
            <div className={styles.parent__presentaion_cards}>
                <TreeBestMovies treeFirtsMovies={treeFirtsMovies} />
                <ul>
                    {
                        genres.map(genre => <li key={genre.id} className="m-1"> <button onClick={() => getGenresMovies(genre.id, genre.name)}> <nobr>{genre.name}</nobr></button></li>)
                    }
                </ul>
            </div>
            <h1>{genreTitle ? genreTitle : "Movies"}</h1>
            <div className={styles.Movies__cards__parent} id="myHeader">
                {
                    MoviesByGenre.map(Movie => {
                        return <CardMovie key={Movie.id} Movie={Movie} />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
