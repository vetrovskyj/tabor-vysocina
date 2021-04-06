import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../components/Layout'

export const ServicesPage = ({}) => { 
  return (
    <Layout>
       <main className="products-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../img/products-image.jpg" />
          <div className="slider-sale-and-text-products">
            <h1 className="slider-sale-products">Nabídka</h1>
            <div className="slider-text-products">
              <h1 className="slider-text-sale-products">produktů a služeb</h1>
            </div>
          </div>
        </div>
        <div className="product-cards">
          <section className="product-card" id="optometrie">
            <img src="../../img/eyewear2_optimised.jpg" alt="photo of glasses" />
            <h2>Optometrie</h2>
            <ul>
              <li>měření dioptrií kvalifikovaným optometristou</li>
              <li>při nákupu brýlí zdarma</li>
              <li>bez nutnosti objednání</li>
            </ul>
          </section>
          <section className="product-card" id="bryle">
            <img src="../../img/eyewear3_optimised.jpg" alt="photo of glasses" />
            <h2>Brýle</h2>
            <ul>
              <li>prodej dioptrických obrub</li>
              <li>široký sortiment dioptrických skel</li>
              <li>odborné poradenství</li>
              <li>záruční i pozáruční servis</li>
              <li>opravy</li>
            </ul>
          </section>
          <section className="product-card">
            <img src="../../img/kontaktni-cocky.jpg" alt="photo of glasses" />
            <h2>Kontaktní čočky</h2>
            <ul>
              <li>vstupní vyšetření</li>
              <li>konzultace a výběr optimálních čoček</li>
              <li>aplikace</li>
              <li>nácvik</li>
            </ul>
          </section>
          <section className="product-card" id="doplnky">
            <img src="../../img/eyewear1_optimised.jpg" alt="photo of glasses" />
            <h2>Doplňkový prodej</h2>
            <ul>
              <li>sluneční brýle</li>
              <li>pouzdra</li>
              <li>čistící prostředky</li>
              <li>roztoky na kontaktní čočky</li>
            </ul>
          </section>
        </div>
        <div className="info-footer-container">
          <div className="info-footer">
            <div className="info-contacts">
              <div className="info-contact">
                <img alt="person-icon" src="../../img/person-icon.png" />
                <p>Bc. Jitka Hronková</p>
              </div>
              <div className="info-contact">
                <img alt="info-icon" src="../../img/info-icon.png" />
                <p>IČO: 45645687</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="#">Obchodní podmínky</a>
              <a href="#">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"><img className="fb-icon" alt="facebook-icon" src="../../img/facebook-icon.png" /></a>
          </div>
        </div>
      </main>
    <Helmet>
      <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
    </Helmet>
    </Layout>
)
}

export default ServicesPage
