import styles from '../../styles/Home.module.css'
import InicioSesion from './InicioSesion'

export default function ContainerForm ({ titulo }) {
  return (
    <>
      <div className={styles.containerLog}>
          <form className={styles.formLog} >
            <center><font face="Inter" color="#5656E7" size="6"><h3>{titulo}</h3></font></center>
            
            <InicioSesion/>
          </form>
      </div>
    </>
  )
}
