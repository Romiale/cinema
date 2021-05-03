import React from 'react'
import CardMovieModal from '../components/CardMovieModal';
import styles from '../style/modal.module.scss';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import bg from '../img/bg.jpg';
import imdb from '../icons/imdb.svg';
import netflix from '../icons/netflix.svg';
import bg2 from '../img/bg2.jpg';
import info from '../icons/info-circle.svg';
import Casting from '../components/Casting';




function MovieModal(props) {
    return (
        <div className="modal top fade" id={"exampleModal" + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
            <div class="modal-dialog modal-lg bg-dark">
                <div class="modal-content">
                    <div>
                        <div className={styles.header__modal}>
                            <h3 className={styles.h5} id="exampleModalLabel">Avatar</h3>
                            <div>
                                <img className={styles.icones} src={heart} alt="eye" />
                                <span>305</span>
                                <img className={styles.icones} src={eye} alt="eye" />
                                <span>2,5K</span>
                                <button type="button" class="btn" data-mdb-dismiss="modal" aria-label="Close">X</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal__body}>
                        <div>
                            <img className="w-100 m-0" src={props.modalSrc} alt="bg" />
                        </div>
                        <h3>Overview</h3>
                        <div className={styles.overview}>
                            <div className={styles.overview__comment}>
                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aliquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius enim eos deserunt quisquam nemo, repellendus itaque deleniti explicabo sunt quae nulla beatae, voluptas corrupti sint consequatur provident ex accusantium cum. adipisicing elit. Quos cupiditate illo, fugit corporis reprehenderit aliquam alias commodi possimus nesciunt ab repellat assumenda sit. Quis consequuntur natus vitae voluptatem eum deserunt.</p>
                                <p>April 2014  English, Washington  </p>
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
                        <h3 className={styles.similar} ><span>S</span>imilar</h3>
                        <div className={styles.modal__similar}>
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <CardMovieModal src={bg2} logo={info} eye={eye} heart={heart} />
                            <button> See more</button>

                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-mdb-dismiss="modal">
                            Close
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal
