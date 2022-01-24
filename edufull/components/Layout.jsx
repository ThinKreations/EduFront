import React from 'react';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Image from "next/image";
import logo from '../src/ef_w.png';
import Toucans from '../src/logo_Toucans_w.png';

export default function MainLayout({ children }){

    return(
        <>
        <div className={styles.container}>
            <header className={styles.mainHeader}>

            <div className={styles.left}><Image src={logo} width={'250px'} height={'77px'}  /></div>
            <div className={styles.right}><Link href='login'><button onClick={()=>{window.history.back();}}><font face="Inter"><h2>Volver</h2></font></button></Link></div>
            
            
            </header>
                { children }
            <footer className={styles.mainFooter}>
            <Image src={Toucans} width={'100%'} height={'70%'} />
            </footer>
        </div>
        </>
    )

}