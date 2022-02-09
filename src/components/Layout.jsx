import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'

const TemplateWrapper = ({ children }) => {
  return (
    <div className="site-body">
      <Helmet>
        <html lang="cs" />
        <meta charset="UTF-8" />
        <meta name="author" content="Jan Větrovský" />
        <link rel="icon" href="../../img/logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Keywords" content="Tábor, tábor Vysočina, 3. turnus, letní tábor,Vysočina,PČR,děti,hry" />
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/scrollreveal"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default TemplateWrapper
