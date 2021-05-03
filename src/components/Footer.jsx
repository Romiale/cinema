import React from 'react'
import logo from '../icons/logoFile.svg';
import netflix from '../icons/netflix.svg';
import movieWhite from '../icons/movie1.svg';
import imdb from '../icons/imdb.svg';
import styles from '../style/footer.module.scss';
import instagram from '../icons/instagram.svg';
import twitter from '../icons/twitter.svg';
import facebook from '../icons/facebook_white.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__partenaria}>
                <h3>Partenaria media</h3>
                <p>Nous collaborons avec les meilleurs pour vous fournir le meilleur contenu sur le marché</p>
                <div className={styles.footer__partenaria__logos}>
                    <img src={imdb} alt="imdb" />
                    <img src={netflix} alt="netflix" />
                    <img src={movieWhite} alt="movie" />
                </div>
            </div>
            <div className={styles.footer__agenceInfo}>
                <img src={logo} alt="logo cinema" />
                <h3> Contactez l'agence</h3>
                <p>Lorem ipsum dolor sit amet conse Accusa ntium tempora iste, consequ untur ex autem cum nostrum corporis vero facilis magnam, expl icabo hic mol litia suscipit blanditiis nulla repudiandae rerum ducimus doloremque.
                </p>
                <div className={styles.footer__agenceInfo__contact}>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                </div>

            </div>
            <div className={styles.mediaInfo}>
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus voluptatum</p>
                <span>Lorem Ipsum</span>
            </div>
        </div>
    )
}

export default Footer
