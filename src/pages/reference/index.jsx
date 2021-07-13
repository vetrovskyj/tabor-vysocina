import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../components/Layout'

export const Reference = ({ }) => {
  return (
    <Layout>
      <main className="references-main">
        <div className="slider-products">
          <img className="sliderphoto-products" width={1920} alt="sliderphoto" src="../../img/glasses-in-shop2.jpg" />
          <div className="slider-sale-and-text-products references-heading-container">
            <h1 className="slider-sale-products references-heading">Napsali o nás...</h1>
          </div>
          <img src="../../img/quotes.svg" alt="uvozovky" className="quotes" />
        </div>
        <div className="reviews">
          <div className="review">
            <div className="reviewer">
              <img src="../../img/person-review4.jpg" alt="referentka Šárka" width={200} />
              <p>Šárka</p>
            </div>
            <div className="speech-bubble">Naprosto parádní servis! Díky paní Hronkové mám krásné nové sluneční brýle a nemůžu si je vynachválit. Přistupují k vám zde individuálně, takže vždy odcházíte přesně s tím, co vám nejvíc sedne. Určitě doporučuji 😉</div>
          </div>
          <div className="review">
            <div className="speech-bubble-right">Do optiky chodíme pravidelně i s dětmi. Díky trpělivosti a zároveň odbornosti personálu totiž vždy dostaneme to nejlepší. Vůbec nepochobuji o tom, že budeme optiku dále navštěvovat. Určitě se také přijďte sami přesvědčit!</div>
            <div className="reviewer">
              <img src="../../img/person-review.jpg" alt="referent Pavel" width={200} />
              <p>Pavel</p>
            </div>
          </div>
          <div className="review">
            <div className="reviewer">
              <img src="../../img/person-review2.jpg" alt="referent Michal" width={200} />
              <p>Michal</p>
            </div>
            <div className="speech-bubble">Jsem moc rád, že jsem si pro koupi nových tmavých dioptrických brýlí vybral právě optiku Volyně. Všechno tu jde totiž velmi rychle - změří vám zrak a ihned vám poradí s nákupem brýlí. Díky velké nabídce brýlí nebyl výběr problém. S brýlemi
              jsem moc spokojen a mohu optiku jedině doporučit.</div>
          </div>
          <div className="review">
            <div className="speech-bubble-right">Optiku Volyně navštěvujeme celá rodina už několik let a vždy jsme byli spokojení. Seženeme tady totiž brýle sluneční, dioptrické, na čtení i na dálku a vybereme si tak úplně vsichni. Díky příjemné obsluze se vždy těšíme na další návštěvu
              😀
            </div>
            <div className="reviewer">
              <img src="../../img/person-review3.jpg" alt="referentka Jarmila" width={200} />
              <p>Jarmila</p>
            </div>
          </div>
        </div>
        <div className="make-review-section">
          <section>
            <h2>Podělte se také o svou zkušenost</h2>
            <p>Pomozte nám rozšířit pozitvní zážitky z návštěvy naší optiky. Pokud jste u nás byli spokojení, můžete o tom dát vědět i ostatním lidem pomocí hodnocení na Facebooku nebo recenze na Google. Budeme moc rádi za zpětnou vazbu a především se
              těšíme na vaši další návštěvu!</p>
          </section>
          <div className="ways-of-reviewing">
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/reviews/?ref=page_internal">
              <img src="../../img/facebook-icon2.svg" alt="odkazova ikona Google smerujici na recenze" width={100} />
            </a>
            <a href="https://www.google.com/maps/place/O%C4%8Dn%C3%AD+Optika+-+RNDr.+Josef+Bezd%C4%9Bka/@49.1657303,13.8849898,19.5z/data=!4m15!1m7!3m6!1s0x4774b55b04136e87:0xd8c703c7054fb07a!2s387+01+Volyn%C4%9B!3b1!8m2!3d49.1657857!4d13.886239!3m6!1s0x4774b55b6b3ddb8b:0x4b415b6c6d54e069!8m2!3d49.1658724!4d13.8851804!9m1!1b1">
              <img src="../../img/google-icon.svg" alt="odkazova ikona facebooku smerujici na hodnoceni" width={100} />
            </a>
          </div>
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
                <p>IČO: 02835754</p>
              </div>
              <div className="info-contact">
                <img alt="location-icon" src="../../img/location-icon.png" />
                <p>nám. Svobody 14, Volyně, 387 01</p>
              </div>
            </div>
            <div className="aditional-links">
              <a href="../cookies/">Obchodní podmínky</a>
              <a href="../autorska-prava/">Autorská práva</a>
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

export default Reference
