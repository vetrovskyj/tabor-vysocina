import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import ReactGA from 'react-ga';

const TemplateWrapper = ({ children }) => {
  const TRACKING_ID = "G-MQ3FHJKM42";
  ReactGA.initialize(TRACKING_ID);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Optika, Optometrie, Volyně, Brýle, Zrak, Oči" />
        <meta name="description" content="Website for Optika Volyně, which sells glasses and provides visual services" />
        <meta name="author" content="Jan Větrovský" />
        <title>Domovská stránka | Optika Volyně</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="../../img/logo.svg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MQ3FHJKM42"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MQ3FHJKM42');
        </script>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default TemplateWrapper
