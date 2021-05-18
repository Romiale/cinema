import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player';
import SimilarList from '../components/SimilarList'
import CastingList from '../components/CastingList'
import styles from '../style/modal.module.scss';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import imdb from '../icons/imdb.svg';
import netflix from '../icons/netflix.svg';
import axios from 'axios';



function MovieModal({ Movie }) {
    const [key, setKey] = useState([])
    useEffect(() => {
        const getTrialVideoKey = async () => {
            const videoKey = await axios(`https://api.themoviedb.org/3/movie/${Movie.id}/videos?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
            setKey(videoKey.data.results[0] === undefined ? " " : videoKey.data.results[0].key)
        }
        getTrialVideoKey()
    }, [Movie.id]);

    return (
        <div className="modal top fade" id={"exampleModal" + Movie.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
            <div className="modal-dialog modal-lg bg-dark">
                <div className="modal-content">
                    <div>
                        <div className={styles.header__modal}>
                            <h2 className={styles.h5} id="exampleModalLabel">{Movie.title ? Movie.title : Movie.name}</h2>
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
                            <ReactPlayer height="400px" width="800px" controls={true} url={`www.youtube.com/embed/${key}`} />
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
                            <CastingList movieId={Movie.id} />

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
