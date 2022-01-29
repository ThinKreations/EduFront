import styles from '../../styles/Home.module.css'

export default function InicioSesion () {
  return (
    <>
      <div>
        <br></br>
        <center><font face="Inter" size="4" className={styles.sub}><h3>Correo:</h3></font></center>
        <center><input type="text" className={styles.inputLog}/></center>
        
        <center><font face="Inter" size="4" className={styles.sub}><h3>Contraseña:</h3></font></center>
        <center><input type="password" className={styles.inputLog}/></center>
      </div>
    </>
  )
}
