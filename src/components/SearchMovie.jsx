import React from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.svg'


function SearchMovie({ handleChange, handleClick }) {

    return (
        <div>
            <input type="text" placeholder="Search movie" onChange={handleChange} />
            <button>
                <Link to="/fiction"><img src={search} alt="search" onClick={handleClick} /></Link>
            </button>
        </div>
    )
}

export default SearchMovie
