import axios from 'axios';
import { searchContext } from '../components/Contexts';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.svg'


function SearchMovie({ handlChange, handlClick }) {

    return (
        <div>
            <input type="text" placeholder="Search movie" onChange={handlChange} />
            <button onClick={handlClick}>
                <Link to="/blog"><img src={search} alt="search" /></Link>
            </button>
        </div>
    )
}

export default SearchMovie
