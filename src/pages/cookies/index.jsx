import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../components/Layout'

export const Cookies = ({ }) => {
  return (
    <Layout>
      <div className="additional-pages-nav"></div>
      <main className="additional-pages-main">
        <h1>Zásady používání cookies</h1>
        <h2>Co jsou cookies?</h2>
        <p>Cookies, což jsou malá množství dat, která naše servery posílají vašemu počítači a která umožňují lepší využití našich serverů a přizpůsobení jejich obsahu vašim potřebám.
        </p>
        <h2>Jak cookies využíváme?</h2>
        <p>Cookies používá téměř každá internetová stránka na světě. Cookies zvyšují uživatelskou přívětivost opakovaně navštívené internetové stránky, a proto jsou pro vás užitečné. Pokud pro návštěvu našich internetových stránek použijete stejný počítač
          a stejný internetový prohlížeč, cookies pomáhají vašemu počítači zapamatovat si navštívené stránky a vaše nastavení stránek.</p>
        <p>Prostřednictvím našich webových stránek mohou být ve vašem počítači ukládány také cookies provozovatelů reklamních systémů, které jsou na našich stránkách provozovány. V rámci remarketingu využívá naše společnost také systémy Google. Data z remarketingu
          používáme výhradně k segmentaci návštěvníků za účelem doručení relevantnějšího reklamního sdělení. Segmenty jsou vytvořeny na základě několika obecných vzorců chování návštěvníků.
        </p>
        <p>Existují dočasné cookies a trvalé cookies. Dočasné jsou uloženy ve vašem počítači jen do ukončení prohlížeče. Dočasné cookies umožňují uchovávání informací při přecházení z jedné webové stránky na druhou a odstraňují potřebu opakovaného zadávání
          některých údajů. Trvalé cookies pomáhají identifikovat váš počítač, jestliže znovu navštívíte náš web, ale neumožňují jakkoliv identifikovat vás osobně. Trvalé cookies umožňují přizpůsobovat naše stránky vašim zájmům, ale nemůžeme jakkoliv
          identifikovat vás osobně a příslušná data ukládáme zcela anonymizovaně a nespojujeme je s jakýmikoliv jinými daty.</p>
        <h2>Jak cookies vypnout?</h2>
        <p>Standardní webové prohlížeče (Safari, Internet Explorer, Firefox, Google Chrome apod.) podporují správu cookies. V rámci nastavení prohlížečů můžete jednotlivé cookies ručně mazat, blokovat či zcela zakázat jejich použití, lze je také blokovat
          nebo povolit jen pro jednotlivé internetové stránky. Pro detailnější informace prosím použijte nápovědu vašeho prohlížeče. Pokud bude mít váš prohlížeč použití cookies povoleno, budeme vycházet z toho, že souhlasíte s využíváním standardních
          cookies ze strany našich serverů.
        </p>
      </main>
      <div className="info-footer-container additional-pages-footer">
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
              <a href="/cookies/">Používání cookies</a>
              <a href="/autorska-prava/">Autorská práva</a>
            </div>
            <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank"><img className="fb-icon" alt="facebook-icon" src="../../img/facebook-icon.png" /></a>
          </div>
        </div>
      <Helmet>
        <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
      </Helmet>
    </Layout>
  )
}

export default Cookies
