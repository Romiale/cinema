import React, { useState, useEffect } from 'react';
import styles from '../style/movies.module.scss';
import heart from '../icons/heart.svg';
import CardMovie from '../components/CardMovie';
import Footer from '../components/Footer';


export default function ActionMovies({ getMoviesByCategories, MoviesByGenre, genres }) {

    const getGenresMovies = (genreId, genreName) => {
        getMoviesByCategories(genreId)
        setGenreTitle(genreName);
    }


    const [genreTitle, setGenreTitle] = useState("")
    const [treeFirtsMovies, setTreeFirtsMovies] = useState([])
    const [moviesToShow, setMoviesToShow] = useState([])

    useEffect(() => {
        setMoviesToShow(MoviesByGenre)
    }, [MoviesByGenre]);

    useEffect(() => {
        const sortedMovies = MoviesByGenre.sort((a, b) => {
            return b.vote_count - a.vote_count
        })
        setTreeFirtsMovies(sortedMovies.slice(0, 3))
    }, [MoviesByGenre]);


    return (
        <div className={styles.body}>
            <div className={styles.parent__presentaion_cards}>
                {
                    treeFirtsMovies.map(movie => {
                        return (
                            <div key={movie.id}>
                                <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt="bg" className="w-100 rounded-2" />
                                <div>
                                    <p>{movie.title}</p>
                                    <p>{movie.overview}</p>
                                    <span> <img src={heart} alt="heart" /></span>

                                </div>
                            </div>
                        )
                    })
                }

                <ul>
                    {
                        genres.map(genre => <li key={genre.id} className="m-1"> <button onClick={() => getGenresMovies(genre.id, genre.name)}> <nobr>{genre.name}</nobr></button></li>)
                    }
                </ul>
            </div>
            <h1 className="text-white mt-5 p-3 header" >{genreTitle}</h1>
            <div className={styles.Movies__cards__parent} id="myHeader">
                {
                    moviesToShow.map(Movie => {
                        return <CardMovie key={Movie.id} Movie={Movie} />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
