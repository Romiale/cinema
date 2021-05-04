import styles from '../style/card.module.scss';
import MovieModal from '../components/MovieModal';
import bg from '../img/bg.jpg';



const CardMovie = (props) => {
    return (
        <div className={styles.card__movie}>
            <div className={styles.card__image}>
                {/* <iframe className="w-100 h-100 rounded-2" width="560" height="315" src="https://www.youtube.com/embed/AxLH0lXEGAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

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
                    <p>{props.name}</p>
                    {/* debut modal */}
                    <img className={styles.card__comment__info} src={props.logo} alt="info" data-mdb-toggle="modal" data-mdb-target={"#exampleModal" + props.id} />
                    <MovieModal modalSrc={props.modalSource} id={props.id} />
                </div>

            </div>
        </div>
    )
}

export default CardMovie
