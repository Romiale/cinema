import React from 'react';
import UpcommingList from '../components/UpcommingList';
import PopularList from '../components/PopularList';
import Footer from '../components/Footer';
import styles from '../style/Home.module.scss';
import bg2 from '../img/bg2.jpg';
import play from '../icons/play.svg';



const Home = ({ onclickNextPage, onclickPreviewPage, pageMax }) => {

    return (

        <div className="Col-md-9 offset-1">
            <div className={styles.body}>
                <div className={styles.video}>
                    <img src={bg2} alt="bg" />
                    <div className={styles.video__description}>
                        <h1>AVATAR</h1>
                        <p>In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.</p>
                        <img src={play} alt="" />
                    </div>
                </div>
                <h2 >Upcoming</h2>
                <div id="latests" className={styles.latests}>
                    <UpcommingList />
                    <button className="btn btn-dark"> Preview</button> <button className="btn btn-dark">Next</button>
                </div>

                <h2 >Popular</h2>

                <div id="popular" className={styles.popular}>
                    <PopularList />
                    <button className="btn btn-dark" onClick={onclickPreviewPage}> Preview</button> <button className="btn btn-dark" onClick={onclickNextPage}>Next</button>
                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Home
