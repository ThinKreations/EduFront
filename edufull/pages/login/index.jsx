
import ContainerForm from "../../components/login/ContainerForm";

import Head from '../../components/Head'
import Layout from '../../components/Layout'


//Inicio de sesion
export default function Index () {
  return (
    <>
    <Head titulo="Accede"/>
    <Layout>
      <ContainerForm titulo="Inicio de Sesión"/>
    </Layout>
    </>
  )
}
