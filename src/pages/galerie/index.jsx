import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Galleries from '../../components/Galleries'

export default class Galerie extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={`Galerie | Tábor Vysočina 3. turnus`}
          meta={[
            {
              name: `description`,
              content: 'Galerie fotek a videí z tábora Vysočina 3. turnus v Novém Městě na Moravě',
            },
            {
              name: "keywords",
              content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus, Foto, Videa, Fotky, Fotogalerie',
            },
          ]} />
        <main>
          <Galleries />
          <section className="years-section">
            <h2>Léto</h2>
            <div className="years-preview-container">
              <input className="prevBtn" type="image" src="../../img/leva.png" name="leva" alt="leva-sipka" />
              <div className="years-preview" id="years-preview-zero">
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2020</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2019</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2018</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2017</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2016</a>
                  </div>
                </div>
              </div>
              <input className="nextBtn" type="image" src="../../img/prava.png" name="prava" alt="prava-sipka" />
            </div>
          </section>
          <section className="years-section">
            <h2>Velikonoce</h2>
            <div className="years-preview-container">
              <input className="prevBtn" type="image" src="../../img/leva.png" name="leva" alt="leva-sipka" />
              <div className="years-preview" id="years-preview-first">
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2020</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2019</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2018</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2017</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2016</a>
                  </div>
                </div>
              </div>
              <input className="nextBtn" type="image" src="../../img/prava.png" name="prava" alt="prava-sipka" />
            </div>
          </section>
          <section className="years-section">
            <h2>Výlety</h2>
            <div className="years-preview-container">
              <input className="prevBtn" type="image" src="../../img/leva.png" name="leva" alt="leva-sipka" />
              <div className="years-preview" id="years-preview-third">
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2020</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2019</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2018</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2017</a>
                  </div>
                </div>
                <div className="years-item-container">
                  <div className="years-item">
                    <a href="../galerie-2020/">2016</a>
                  </div>
                </div>
              </div>
              <input className="nextBtn" type="image" src="../../img/prava.png" name="prava" alt="prava-sipka" />
            </div>
          </section>
          <Helmet>
            <script src={withPrefix('../scripts/slider.js')} type="text/javascript" />
          </Helmet>
        </main>
      </Layout>
    )
  }
}