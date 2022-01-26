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
                <div className={styles.right}><Link href='login'><button><font face="Inter"><h2>Acceder</h2></font></button></Link></div>
            </header>
                { children }
            <footer className={styles.mainFooter}>
                <div className={styles.left}>
                    <Image src={Toucans} width={'200%'} height={'105%'} />
                    <font face="Inter" size="2">
                    <br/>
                    <h3>Miembros:</h3>
                    <li><Link href="Xd"><a target="_blank">Arce Roldán Sergio Elías</a></Link></li>
                    <li><Link href="Xd"><a target="_blank">Castañeda Rodriguez Rafael Gil</a></Link></li>
                    <li><Link href="Xd"><a target="_blank">Flores Zamora Ithan Adrián</a></Link></li>
                    <li><Link href="Xd"><a target="_blank">Gutiérrez Villalobos José Alfredo</a></Link></li>
                    <li><Link href="https://github.com/ThinKreations"><a target="_blank">Nápoles Munguía José de Jesús</a></Link></li>
                    
                    
                </font>
                    
                </div>
                <div className={styles.right}>
                <font face="Inter">
                    <p>GitHub:</p>
                    <Link href="https://github.com/ThinKreations/EduFront"><a target="_blank">FrontEnd (Open Source)</a></Link>                    
                    <br/>
                    <p>Ayuda (Enviar Correo)</p>
                </font>
                </div>
            </footer>
        </div>
        </>
    )

}