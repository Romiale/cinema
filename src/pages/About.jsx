import React from 'react';
import Wrapper from '../components/Wrapper';
import styles from '../style/About.module.css';

export default function About() {
    return (
        <Wrapper>
            <div>
                <h1 className={styles.title}>About</h1>
                <div className={styles.body}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit autem distinctio dolores reprehenderit cumque beatae praesentium, inventore sed nesciunt repellat eum temporibus dolorum illum iure aut deserunt magni. Rem, saepe!</p>
                </div>
            </div>
        </Wrapper>
        
    )
}
