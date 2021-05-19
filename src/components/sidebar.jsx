import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../style/sidebar.module.scss';
import "../style/active.css";
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
            <button className={styles.sidebar__btn}><a href="mailto:romialengoy5@gmail.com">Contact Us</a> </button>
            <ul>
                <li className={styles.title}><NavLink activeClassName="active" to="/"> <span>H</span>ome</NavLink></li>
                <li> <img src={latest} alt="upcoming" className={styles.icones__link} /><NavLink to="/">Upcoming</NavLink></li>
                <li> <img src={popular} alt="popular" className={styles.icones__link} /><NavLink to="/">Popular</NavLink></li>
                <hr className="mt-3 bg-white" />
                <li className={styles.title}><NavLink to="movies"> <span>G</span>enres</NavLink></li>
                <li><img src={Action} alt="movies" className={styles.icones__link} /><NavLink to="/movies">Movies</NavLink></li>
                <li><img src={serie} alt="series" className={styles.icones__link} /><NavLink to="/series">Series</NavLink></li>
            </ul>
            <img src={movie} alt="movie" className={styles.imgMovie} />
            <p>Best movies and videos on cinema, watch and enjoy the life </p>
        </div>
    )
}

export default Sidebar
