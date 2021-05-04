import React from 'react'
import MovieModal from '../components/MovieModal';
import styles from '../style/modal.module.scss';


function CardMovieModal(props) {
    return (
        <div className={styles.card__movie}>
            <div className={styles.card__image}>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/bpHtxx_wmqw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img src={props.src} alt="bg" />
            </div>
            <div className={styles.card__comment}>
                <div className={styles.card__comment__details}>

                    <img className={styles.card__comment__info} src={props.eye} alt="info" />
                    <span>236</span>
                    <img className={styles.card__comment__info} src={props.heart} alt="info" />
                    <span>3,5K</span>
                    <p>2016</p>
                </div>

                <div className={styles.card__comment__info__group}>
                    <p>Avatar 2</p>
                </div>

            </div>
        </div>
    )
}

export default CardMovieModal
