import React from 'react'
import styles from '../style/modal.module.scss';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import bg from '../img/bg.jpg';
import imdb from '../icons/imdb.svg';
import netflix from '../icons/netflix.svg';
import bg2 from '../img/bg2.jpg';
import info from '../icons/info-circle.svg';
import Casting from '../components/Casting';




function MovieModal({ popularMovie }) {
    return (
        <div className="modal top fade" id={"exampleModal" + popularMovie.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
            <div className="modal-dialog modal-lg bg-dark">
                <div className="modal-content">
                    <div>
                        <div className={styles.header__modal}>
                            <h3 className={styles.h5} id="exampleModalLabel">{popularMovie.title}</h3>
                            <div>
                                <img className={styles.icones} src={heart} alt="eye" />
                                <span>{popularMovie.vote_average + "K"}</span>
                                <img className={styles.icones} src={eye} alt="eye" />
                                <span>{popularMovie.vote_count}</span>
                                <button type="button" className="btn" data-mdb-dismiss="modal" aria-label="Close">X</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal__body}>
                        <div className={styles.background__modalImage}>
                            <img className="w-100 h-100 m-0 " src={"https://image.tmdb.org/t/p/original/" + popularMovie.poster_path} alt="bg" />
                        </div>
                        <h3>Overview</h3>
                        <div className={styles.overview}>
                            <div className={styles.overview__comment}>
                                <p>{popularMovie.overview}</p>
                                <p>{popularMovie.release_date}  ,{popularMovie.original_language === "en" ? "English" : popularMovie.original_language}  </p>
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
                            <SimilarList movieId={popularMovie.id} />
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