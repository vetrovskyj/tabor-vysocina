import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../../components/Layout'

export const Doplnky = ({ }) => {
  return (
    <Layout>
      <main className="glasses-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../../img/doplnky-product.jpg" />
          <div className="slider-sale-and-text-products references-heading-container">
            <h1 className="slider-sale-products references-heading">Doplňky</h1>
          </div>
        </div>
        <div className="bottom-site">
          <div className="boxes">
            <div className="box">
              <img alt="ikona pouzdra na bryle" src="../../../img/glasses-case.png" width={100} />
              <div className="box-desc">
                <h2>Pouzdra</h2>
                <p>Optometrické vyšetření provádí vždy vysoce kvalifikovaný pracovník. Věnujeme vám vždy plnou pozornost, poradíme a pomocí moderních optometrických nástrojů a metod se postaráme o vaše oči.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona cisticiho prostredku" src="../../../img/bleaching.svg" width={100} />
              <div className="box-desc">
                <h2>Čisticí prostředky</h2>
                <p>Zrak si k nám můžete nechat zajít vyšetřit kdykoliv během naší otevírací doby a to i bez objednání. Věnovat se vám budeme hned, jakmile to bude možné a klidně během pár minut může být hotovo.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona roztoku" src="../../../img/roztok.svg" width={100} />
              <div className="box-desc">
                <h2>Roztoky na čočky</h2>
                <p>Veškeré optometrické služby, které vám uděláme, máte při následném nákupu jakýchkoliv brýlí zdarma. S výběrem vám na základě vyšetření samozřejmě pomůžeme a společně se pokusíme najít to nejlepší možné řešení.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-of-productpage">
          <div className="review product-review">
            <div className="speech-bubble-right sortiment-bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum, porro neque unde hic, est voluptate recusandae voluptas, aliquid fugiat excepturi sed molestias inventore vero dignissimos libero enim deserunt illo.
            </div>
            <div className="reviewer reviewer-of-product">
              <img src="../../../img/person-for-products3.jpg" alt="referent Ladislav" width={200} />
              <p>Ladislav</p>
            </div>
          </div>
        </div>
        <div className="info-footer-container">
          <div className="info-footer">
            <div className="info-contacts">
              <div className="info-contact">
                <img alt="person-icon" src="../../../img/person-icon.png" />
                <p>Bc. Jitka Hronková</p>
              </div>
              <div className="info-contact">
                <img alt="info-icon" src="../../../img/info-icon.png" />
                <p>IČO: 45645687</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="#">Obchodní podmínky</a>
              <a href="#">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"><img className="fb-icon" alt="facebook-icon" src="../../../img/facebook-icon.png" /></a>
          </div>
        </div>
      </main>
      <Helmet>
        <script src={withPrefix('../../scripts/hamburger.js')} type="text/javascript" />
      </Helmet>
    </Layout>
  )
}

export default Doplnky
