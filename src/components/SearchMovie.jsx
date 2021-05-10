import React from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.svg'


function SearchMovie({ handlChange, handlClick }) {

    return (
        <div>
            <input type="text" placeholder="Search movie" onChange={handlChange} />
            <button>
                <Link to="/fiction"><img src={search} alt="search" onClick={handlClick} /></Link>
            </button>
        </div>
    )
}

export default SearchMovie
