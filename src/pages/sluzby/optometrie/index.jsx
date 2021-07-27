import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../../components/Layout'

export const Optometrie = ({ }) => {
  return (
    <Layout>
      <Helmet
        title={`Optometrie | Optika Volyně`}
        meta={[
          {
            name: `description`,
            content: 'Optometrické služby, které Optika Volyně poskytuje',
          },
          {
            name: "keywords",
            content: 'Optika, Optometrie, Volyně, Zrak, Oči',
          },
        ]}
      />
      <main className="glasses-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../../img/optometrie-sortiment.jpg" />
          <div className="slider-sale-and-text-products references-heading-container">
            <h1 className="slider-sale-products references-heading">Optometrie</h1>
          </div>
        </div>
        <div className="bottom-site">
          <div className="boxes">
            <div className="box">
              <img alt="ikona odbornost" src="../../../img/experience.svg" width={100} />
              <div className="box-desc">
                <h2>Odbornost</h2>
                <p>Optometrické vyšetření provádí vždy vysoce kvalifikovaný pracovník. Věnujeme vám vždy plnou pozornost, poradíme a pomocí moderních optometrických nástrojů a metod se postaráme o vaše oči.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona rychlosti" src="../../../img/stopwatch.svg" width={100} />
              <div className="box-desc">
                <h2>Rychlost</h2>
                <p>Zrak si k nám můžete nechat zajít vyšetřit kdykoliv během naší otevírací doby a to i bez objednání. Věnovat se vám budeme hned, jakmile to bude možné a klidně během pár minut může být hotovo.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona vyhody" src="../../../img/insignia.svg" width={100} />
              <div className="box-desc">
                <h2>Výhody</h2>
                <p>Veškeré optometrické služby, které vám uděláme, máte při následném nákupu jakýchkoliv brýlí zdarma. S výběrem vám na základě vyšetření samozřejmě pomůžeme a společně se pokusíme najít to nejlepší možné řešení.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-of-productpage">
          <div className="review product-review">
            <div className="speech-bubble-right sortiment-bubble">Do optiky jsem přišel těsně před zavíračkou a přesto mi vlídně provedli vyšetření zraku, seznámili mě s jeho výsledky a poradili mi s výběrem brýlí. Díky rozsháhlé nabídce mi hned jedny padly do oka a během půl hodiny jsem tak odcházel s novými brýlemi a vyšetřením zdarma.
            </div>
            <div className="reviewer reviewer-of-product">
              <img src="../../../img/person-for-products.jpg" alt="referent Matěj" width={200} />
              <p>Matěj</p>
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
                <p>IČO: 02835754</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="../../cookies/">Obchodní podmínky</a>
              <a href="../../autorska-prava/">Autorská práva</a>
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

export default Optometrie
