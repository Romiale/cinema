import React from 'react'
import logo from '../icons/logoFile.svg';
import imdb from '../icons/imdb.svg';
import styles from '../style/footer.module.scss';
import instagram from '../icons/instagram.svg';
import twitter from '../icons/twitter.svg';
import facebook from '../icons/facebook_white.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__partenaria}>
                <h3>Media partnership</h3>
                <p>We partner with the best to provide you with the best content on the market </p>
                <div className={styles.footer__partenaria__logos}>
                    <img src={imdb} alt="imdb" />
                    {/* <img src={netflix} alt="netflix" /> */}
                </div>
            </div>
            <div className={styles.footer__agenceInfo}>
                <img src={logo} alt="logo cinema" />
                <h3> Contact us</h3>
                <p>for all your questions, opinions and proposals, get in touch directly and easily with the agency. The Cinema is constantly publishing new films and series every week on facebook and instagram
                </p>
                <div className={styles.footer__agenceInfo__contact}>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                </div>

            </div>
            <div className={styles.mediaInfo}>
                <h3>THE BEST FOR YOU</h3>
                <p>Best movies and videos on cinema, watch and enjoy the life</p>
            </div>
        </div>
    )
}

export default Footer
