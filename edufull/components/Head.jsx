import React from 'react';
import Head from "next/head";
import icon from "../public/favicon.ico";

export default function head(props) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* Para aumentar la exposición de la página en los buscadores */}
                <meta name="keywords" content="educación, EduFull, edufull, cuestionarios, aprendizaje"/>
                <title> {props.titulo} </title>
                <link rel="shortcut icon" href={props.icon} />
                
            </Head>
        </div>
    )
}