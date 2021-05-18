import styles from '../style/card.module.scss';
import MovieModal from '../components/MovieModal';
import info from '../icons/info-circle.svg';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import bg from '../icons/logoFile.svg'
import movie from '../icons/movie.svg';





const CardMovie = ({ Movie }) => {
    return (
        <div className={styles.card__movie}>
            <div className={styles.card__image}>
                {/* <iframe className="w-100 h-100 rounded-2" width="560" height="315" src="https://www.youtube.com/embed/AxLH0lXEGAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                <img src={Movie.backdrop_path ? "https://image.tmdb.org/t/p/w500/" + Movie.backdrop_path : bg} alt="bg" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + Movie.id} />
            </div>
            <div className={styles.card__comment}>
                <div className={styles.card__comment__details}>

                    <img className={styles.card__comment__info} src={eye} alt="info" />
                    <span>{Movie.vote_count}</span>
                    <img className={styles.card__comment__info} src={heart} alt="info" />
                    <span>{Movie.vote_average + "K"}</span>
                    <p>2016</p>
                </div>

                <div className={styles.card__comment__info__group}>
                    <p> <nobr>{Movie.title ? Movie.title : Movie.name}</nobr></p>
                    {/* debut modal */}
                    <img className={styles.card__comment__info} src={info} alt="info" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + Movie.id} />
                    <MovieModal Movie={Movie} />
                </div>

            </div>

        </div>
    )
}

export default CardMovie
