import React from 'react';
import ReactPlayer from 'react-player';
import UpcommingList from '../components/UpcommingList';
import PopularList from '../components/PopularList';
import Footer from '../components/Footer';
import styles from '../style/Home.module.scss';



const Home = ({ goToNextPage, goToPreviewPage, pageMax }) => {
    return (

        <div className="Col-md-9 offset-1">

            <div className={styles.body}>
                <div className={styles.video}>
                    <ReactPlayer className={styles.video} stopOnUnmount={true} url='www.youtube.com/embed/wZti8QKBWPo' />
                    <div className={styles.video__description}>
                        <h1>NOBODY</h1>
                        <p>Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.</p>
                    </div>
                </div>
                <h2 >Upcoming</h2>
                <div id="upcoming" className={styles.latests}>
                    <UpcommingList />
                    <button className="btn btn-dark"> Preview</button> <button className="btn btn-dark">Next</button>
                </div>

                <h2 >Popular</h2>

                <div id="popular" className={styles.popular}>
                    <PopularList />
                    <button className="btn btn-dark" onClick={goToPreviewPage}> Preview</button> <button className="btn btn-dark" onClick={goToNextPage}>Next</button>
                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Home
