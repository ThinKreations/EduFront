import styles from '../../styles/Login.module.css'
import InicioSesion from './InicioSesion'

export default function ContainerForm ({ titulo }) {
  return (
    <>
      <div className={styles.main_container}>
          <form className={styles.formulario} >
            <h3 className={styles.title_form} >{titulo}</h3>
            <InicioSesion/>
          </form>
      </div>
    </>
  )
}
