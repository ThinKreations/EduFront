import React from 'react';
import Head from '../components/Head'
import Layout from '../components/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (

    <>
    <div className={styles.container}>
      <Head titulo="EduFull"/>
      <Layout>
        Ola
      </Layout>
    </div>
    </>
  )
}
