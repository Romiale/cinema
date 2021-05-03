import React from 'react';
import CardMovie from '../components/CardMovie';
import Footer from '../components/Footer';
import styles from '../style/Home.module.scss';
import bg from '../img/bg.jpg';
import bg2 from '../img/bg2.jpg';
import bg3 from '../img/bg3.jpg';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import info from '../icons/info-circle.svg';
import play from '../icons/play.svg';

const Home = () => {
    return (
        <div className="Col-md-9 offset-1">
            <div className={styles.body}>
                <div className={styles.video}>
                    <img src={bg2} alt="bg" />
                    <div className={styles.video__description}>
                        <h1>THE VENOM 3</h1>
                        <p>Cne of lorem ipsum dolor sit amet conse Octetur sit amet conse Octetur adipi sicing elit. Ducimus, repellendus</p>
                        <img src={play} alt="" />
                    </div>
                </div>
                <h2 >Latests movies</h2>
                <div id="latests" className={styles.latests}>
                    <CardMovie src={bg2} logo={info} eye={eye} heart={heart} modalSource={bg2} id={1} />
                    <CardMovie src={bg2} logo={info} eye={eye} heart={heart} modalSource={bg2} id={2} />
                    <CardMovie src={bg2} logo={info} eye={eye} heart={heart} modalSource={bg2} id={3} />
                    <CardMovie src={bg2} logo={info} eye={eye} heart={heart} modalSource={bg2} id={4} />
                    <CardMovie src={bg} logo={info} eye={eye} heart={heart} modalSource={bg} id={5} />
                    <CardMovie src={bg} logo={info} eye={eye} heart={heart} modalSource={bg} id={6} />
                    <CardMovie src={bg} logo={info} eye={eye} heart={heart} modalSource={bg} id={7} />
                    <CardMovie src={bg} logo={info} eye={eye} heart={heart} modalSource={bg} id={8} />

                </div>

                <h2 >Popular</h2>

                <div id="popular" className={styles.popular}>
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={9} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={10} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={11} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={12} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={13} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={14} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={15} />
                    <CardMovie src={bg3} logo={info} eye={eye} heart={heart} modalSource={bg3} id={16} />

                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Home
