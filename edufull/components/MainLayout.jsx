import React from 'react';
import styles from "../styles/Home.module.css";

export default function MainLayout({ children }){

    return(
        <>
        <div className={styles.container}>
            ola
                { children }
            ola
        </div>
        </>
    )

}