import React from 'react';
import styles from '../style/casting.module.scss';
import cinema from '../icons/movie.svg'




function Casting({ person }) {
    let castingImage = person.profile_path

    return (
        <div className={styles.casting}>
            <div className="m-0 p-2">
                <img className="w-100 m-0 rounded-1" src={castingImage ? "https://image.tmdb.org/t/p/w500/" + castingImage : cinema} alt="bg" />
            </div>
            <p className="pt-1 pb-3">{person ? person.name : " name"}</p>
        </div>
    )
}

export default Casting
