import React from 'react';
import bg from '../img/bg.jpg';
import styles from '../style/casting.module.scss';




function Casting() {
    return (
        <div className={styles.casting}>
            <div className="m-0 p-2">
                <img className="w-100 m-0 rounded-1" src={bg} alt="bg" />
            </div>
            <p className="pt-1 pb-3">Maria lopez</p>
        </div>
    )
}

export default Casting
