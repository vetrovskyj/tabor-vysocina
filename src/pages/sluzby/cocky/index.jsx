import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../../components/Layout'

export const Cocky = ({ }) => {
  return (
    <Layout>
      <main className="glasses-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../../img/lenses.jpg" />
          <div className="slider-sale-and-text-products references-heading-container">
            <h1 className="slider-sale-products references-heading">Kontatkní čočky</h1>
          </div>
        </div>
        <div className="bottom-site">
          <div className="boxes">
            <div className="box">
              <img alt="ikona individuality" src="../../../img/advice.svg" width={100} />
              <div className="box-desc">
                <h2>Poradenství</h2>
                <p>Jsou pro vás kontaktní čočky zatím velkou neznámou? Nemusíte se bát, u nás vám s jejich výběrem i funkcemi rádi poradíme, vše vám vysvětlíme a doporučíme vám to, co je pro vaše oči nejlepší.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona vyberu" src="../../../img/choices.svg" width={100} />
              <div className="box-desc">
                <h2>Výběr</h2>
                <p>Vybírat si můžete z celé řady kontaktních čoček. V nabíce máme jednodenní, dvoutýdenní i měsíční typy čoček a najdete tak přesně takové, které budou odpovídat vašemu životnímu stylu a potřebám.</p>
              </div>
            </div>
            <div className="box">
              <img alt="ikona certifikatu" src="../../../img/contact-lens.svg" width={100} />
              <div className="box-desc">
                <h2>Aplikace</h2>
                <p>Pokud s čočkami začínáte, rádi vám s prvním seznamováním pomůžeme. Naučíme vás, jak o čočky pečovat, jakým způsobem se dají co nejpříjemněji nasazovat a také následně vyjímat z očí.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-of-productpage">
          <div className="review product-review">
            <div className="speech-bubble-right sortiment-bubble">Když jsem poprvé uvažovala o kontaktních čočkách, měla jsem docela velký strach. Mám velmi citlivé oči a nedokázala jsem si představit, jak si budu každý den čočky aplikovat. V optice Volyně mi však poradili s výběrem a naučili mě čočky používat tak, že jsem to skoro necítila.
            </div>
            <div className="reviewer reviewer-of-product">
              <img src="../../../img/person-for-products2.jpg" alt="referentka Markéta" width={200} />
              <p>Markéta</p>
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

export default Cocky
