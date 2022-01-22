import styles from "../styles/Login.module.css";
/* Cabezera del login */
export default function Container({ title }){

    return(
        <div className={styles.container}>
            <h1 className={styles.edufull} > EduFull.</h1>
            <h2 className={styles.title} >{title}</h2>
        </div>
    )

}