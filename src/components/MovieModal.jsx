import React from 'react'
import SimilarList from '../components/SimilarList'
import styles from '../style/modal.module.scss';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import imdb from '../icons/imdb.svg';
import netflix from '../icons/netflix.svg';
import Casting from '../components/Casting';




function MovieModal({ Movie }) {
    return (
        <div className="modal top fade" id={"exampleModal" + Movie.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
            <div className="modal-dialog modal-lg bg-dark">
                <div className="modal-content">
                    <div>
                        <div className={styles.header__modal}>
                            <h2 className={styles.h5} id="exampleModalLabel">{Movie.title}</h2>
                            <div>
                                <img className={styles.icones} src={heart} alt="eye" />
                                <span>{Movie.vote_average + "K"}</span>
                                <img className={styles.icones} src={eye} alt="eye" />
                                <span>{Movie.vote_count}</span>
                                <button type="button" className="btn" data-mdb-dismiss="modal" aria-label="Close">X</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal__body}>
                        <div className={styles.background__modalImage}>
                            <img className="w-100 h-100 m-0 " src={"https://image.tmdb.org/t/p/original/" + Movie.backdrop_path} alt="bg" />
                        </div>
                        <h3>Overview</h3>
                        <div className={styles.overview}>
                            <div className={styles.overview__comment}>
                                <p>{Movie.overview}</p>
                                <p>{Movie.release_date}  ,{Movie.original_language === "en" ? "English" : Movie.original_language}  </p>
                            </div>
                            <div className={styles.overview__production}>
                                <div>
                                    <img src={imdb} alt="imdb" />
                                    <img src={netflix} alt="netflix" />
                                </div>
                                <div>
                                    <h4>Directed by</h4>
                                    <p>- David gogins.</p>
                                    <h4>Written by</h4>
                                    <p>- Romiale, ngoy.</p>
                                </div>
                            </div>
                        </div>
                        <h3>Casting</h3>
                        <div className={styles.casting__list}>
                            <Casting />
                            <Casting />
                            <Casting />
                            <Casting />
                            <Casting />
                            <Casting />
                            <Casting />
                            <Casting />

                        </div>
                        <h3 className={styles.similar}><span>S</span>imilar</h3>
                        <div className={styles.modal__similar}>
                            <SimilarList movieId={Movie.id} />
                            <button> See more</button>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark" data-mdb-dismiss="modal">
                            Close
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal
