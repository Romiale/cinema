import React from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.svg'
import styles from '../style/Navbar.module.scss';



function SearchMovie({ handleChange, handleClick }) {

    return (
        <div>
            <input type="text" placeholder="Search movie" onChange={handleChange} />
            <button>
                <Link className={styles.search_button} to="/fiction"><img src={search} alt="search" onClick={handleClick} /></Link>
            </button>
        </div>
    )
}

export default SearchMovie
