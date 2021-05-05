import React from 'react';
import styles from '../style/Wrapper.module.css'

export default function Wrapper({children}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
