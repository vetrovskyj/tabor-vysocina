import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './style.css'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="Optika, Optometrie, Volyně, Brýle, Zrak, Oči"/>
        <meta name="description" content="Website for Optika Volyně, which sells glasses and provides visual services"/>
        <meta name="author" content="Jan Větrovský"/>
        <title>Domovská stránka | Optika Volyně</title>
        <link href="./assets/css/style.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" href="./assets/img/logo.svg"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
