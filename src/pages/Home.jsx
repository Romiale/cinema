import React, { useContext } from 'react';
import UpcommingList from '../components/UpcommingList';
import PopularList from '../components/PopularList';
import Footer from '../components/Footer';
import styles from '../style/Home.module.scss';
import bg2 from '../img/bg2.jpg';
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
                <h2 >Upcoming</h2>
                <div id="latests" className={styles.latests}>
                    <UpcommingList />
                </div>

                <h2 >Popular</h2>

                <div id="popular" className={styles.popular}>
                    <PopularList />
                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Home
