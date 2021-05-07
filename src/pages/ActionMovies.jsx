import React from 'react';
import Wrapper from '../components/Wrapper';
import styles from '../style/actionMovie.module.scss';
import bg from "../img/bg.jpg";
import bg2 from "../img/bg2.jpg";
import bg3 from "../img/bg3.jpg";
import heart from '../icons/heart.svg';
import CardMovie from '../components/CardMovie';


export default function Contact() {
    return (
        <div className={styles.body}>
            <div className={styles.parent__presentaion_cards}>
                <div>
                    <img src={bg} alt="bg" className="w-100 rounded-2" />
                    <div>
                        <p>The venom</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, optio.</p>
                        <span> <img src={heart} alt="" /></span>
                    </div>
                </div>
                <div>
                    <img src={bg2} alt="bg" className="w-100 rounded-2" />
                    <div>
                        <p>Avatar</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, optio.</p>
                        <span> <img src={heart} alt="" /></span>
                    </div>
                </div>
                <div>
                    <img src={bg3} alt="bg" className="w-100 rounded-2" />
                    <div>
                        <p>SPIDERMAN</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, optio.</p>
                        <span> <img src={heart} alt="" /></span>

                    </div>
                </div>
            </div>
            <h2> <span>A</span>ction Movies</h2>
        </div>
    )
}
