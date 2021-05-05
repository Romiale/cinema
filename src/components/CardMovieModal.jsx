import React from 'react'
import styles from '../style/modal.module.scss';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';


function CardMovieModal({ similarMovie }) {
    return (
        <div className={styles.card__movie}>
            <div className={styles.card__image}>
                <img src={"https://image.tmdb.org/t/p/original/" + similarMovie.poster_path} alt="bg" />
            </div>
            <div className={styles.card__comment}>
                <div className={styles.card__comment__details}>

                    <img className={styles.card__comment__info} src={eye} alt="info" />
                    <span>{similarMovie.vote_count}</span>
                    <img className={styles.card__comment__info} src={heart} alt="info" />
                    <span>{similarMovie.vote_average + "K"}</span>
                    <p>{similarMovie.release_date}</p>
                </div>

                <div className={styles.card__comment__info__group}>
                    <p>Avatar 2</p>
                </div>

            </div>
        </div>
    )
}

export default CardMovieModal
