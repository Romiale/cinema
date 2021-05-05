import styles from '../style/card.module.scss';
import MovieModal from '../components/MovieModal';
import bg from '../img/bg.jpg';
import info from '../icons/info-circle.svg';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';




const CardMovie = ({ popularMovie }) => {
    return (
        <div className={styles.card__movie}>
            <div className={styles.card__image}>
                {/* <iframe className="w-100 h-100 rounded-2" width="560" height="315" src="https://www.youtube.com/embed/AxLH0lXEGAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                <img src={"https://image.tmdb.org/t/p/original/" + popularMovie.poster_path} alt="bg" />
            </div>
            <div className={styles.card__comment}>
                <div className={styles.card__comment__details}>

                    <img className={styles.card__comment__info} src={eye} alt="info" />
                    <span>{popularMovie.vote_count}</span>
                    <img className={styles.card__comment__info} src={heart} alt="info" />
                    <span>{popularMovie.vote_average + "K"}</span>
                    <p>2016</p>
                </div>

                <div className={styles.card__comment__info__group}>
                    <p>{popularMovie.title}</p>
                    {/* debut modal */}
                    <img className={styles.card__comment__info} src={info} alt="info" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + popularMovie.id} />
                    <MovieModal popularMovie={popularMovie} />
                </div>

            </div>
        </div>
    )
}

export default CardMovie
