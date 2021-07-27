import React from 'react'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../../components/Layout'

export const AutorskaPrava = ({ }) => {
  return (
    <Layout>
      <Helmet 
        title={`Autorská práva | Optika Volyně`} 
        meta={[
        {
          name: `description`,
          content: 'Autorská práva vztahující se k obsahu na webu Optiky Voylně',
        },
        {
          name: "keywords",
          content: 'Optika, Optometrie, Volyně, Autorská práva',
        },
      ]} />
      <div className="additional-pages-nav"></div>
      <main className="additional-pages-main">
        <h1>Autorská práva</h1>
        <h2>Autoři ilustračních fotografií ze serveru Unspalsh</h2>
        <div>Photo by <a href="https://unsplash.com/@harpreetkaka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Harpreet Singh</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <div>Photo by <a href="https://unsplash.com/@neonbrand?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NeONBRAND</a> on <a href="https://unsplash.com/s/photos/glasses-case?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <div>Photo by <a href="https://unsplash.com/@marina_mv08?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marina Vitale</a> on <a href="https://unsplash.com/s/photos/eye-examination?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <div>Photo by <a href="https://unsplash.com/@nicotitto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">nrd</a> on <a href="https://unsplash.com/s/photos/optics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <div>Photo by <a href="https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">CHUTTERSNAP</a> on <a href="https://unsplash.com/s/photos/glasses-store?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        <h2>Autoři ikon ze serveru Flaticon</h2>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <h2>Autor ikony ze serveru TheNounProject</h2>
        <p>Noun Project “glasses box” icon by Chananan, from thenounproject.com.</p>
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
              <p>IČO: 02835754</p>
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
          <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank" rel="noreferrer"><img className="fb-icon" alt="facebook-icon" src="../../img/facebook-icon.png" /></a>
        </div>
      </div>
      <Helmet>
        <script src={withPrefix('../scripts/hamburger.js')} type="text/javascript" />
      </Helmet>
    </Layout>
  )
}

export default AutorskaPrava
