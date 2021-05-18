import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../style/sidebar.module.scss';
import logo from '../icons/logoFile.svg';
import movie from '../icons/movie.svg';
import latest from '../icons/latest.svg';
import popular from '../icons/stars.svg';
import Action from '../icons/bx_movie.svg';
import serie from '../icons/movie_circle.svg';

function Sidebar() {
    return (
        <div className={styles.sidebar}>

            <img src={logo} alt="logo cinema" className="logo" />
            <button className={styles.sidebar__btn}> Contact Us</button>
            <ul>
                <li className={styles.title}><Link className="active" to="/"> <span>H</span>ome</Link></li>
                <li> <img src={latest} alt="latest" className={styles.icones__link} /><Link to="/#latests">Upcoming</Link></li>
                <li> <img src={popular} alt="latest" className={styles.icones__link} /><Link to="/#popular">Popular</Link></li>
                <hr className="mt-3 bg-white" />
                <li className={styles.title}><Link> <span>G</span>enres</Link></li>
                <li><img src={Action} alt="latest" className={styles.icones__link} /><Link to="/movies">Movies</Link></li>
                <li><img src={serie} alt="latest" className={styles.icones__link} /><Link to="/series">Series</Link></li>
            </ul>
            <img src={movie} alt="movie" className={styles.imgMovie} />
            <p>Best movies and videos on cinema, watch and enjoy the life </p>
        </div>
    )
}

export default Sidebar
