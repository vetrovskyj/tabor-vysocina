import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

export default class Informace extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={`Informace | Tábor Vysočina 3. turnus`}
          meta={[
            {
              name: `description`,
              content: 'Informace o organizaci tábora Vysočina 3. turnus v Novém Městě na Moravě. Popis lokality, zázemí, prostředí i seznam věcí, co si mají účastníci vzít s sebou.',
            },
            {
              name: "keywords",
              content: 'Vysočina, Dětský tábor, Nové Město na Moravě, 3. turnus, lokalita, prostředí, zázemí, věci s sebou, potřeby',
            },
          ]} />
        <main className="telo-lide">
          <div className="dotazy">
            <h1>Nejčastější dotazy</h1>
            <ul className="questions questions-one">
              <li>
                <a href="#arealFoto">
                  <p>Kde děti bydlí</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
              <li>
                <a href="#vybaveniFoto">
                  <p>Co mají na táboře k dispozici</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
              <li>
                <a href="#okoliFoto">
                  <p>Kam chodí mimo tábor</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
            </ul>
            <ul className="questions questions-two">
              <li>
                <a href="#things-needed">
                  <p>Co si vzít s sebou na tábor</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
              <li>
                <a href="#visits">
                  <p>Můžu dítě navštívit</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
              <li>
                <a href="#post">
                  <p>Posílání pošty a balíčků</p>
                  <img
                    src="../../img/arrow-icon.svg"
                    alt="arrow icon"
                    width={20}
                    className="arrow-down"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid-informace">
            {/*<h1 class="kapitola">Zázemí tábora</h1>*/}
            <div className="areal scroll-reveal-ambiente" id="areal">
              <h2>Areál</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea aperiam
                excepturi tempora nihil id accusamus magnam soluta ipsa, modi
                repudiandae perferendis minus. Consequatur, eius? Nobis sint beatae
                alias quia.
              </p>
            </div>
            <div className="arealFoto scroll-reveal-ambiente" id="arealFoto">
              <img src="../../img/budova.jpg" alt="budova" />
            </div>
            <div className="vybaveni scroll-reveal-ambiente" id="vybaveni">
              <h2>Vybavení</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea aperiam
                excepturi tempora nihil id accusamus magnam soluta ipsa, modi
                repudiandae perferendis minus. Consequatur, eius? Nobis sint beatae
                alias quia.
              </p>
            </div>
            <div className="vybaveniFoto scroll-reveal-ambiente" id="vybaveniFoto">
              <img src="../../img/hriste.jpg" alt="hriste" />
            </div>
            <div className="okoli scroll-reveal-ambiente" id="okoli">
              <h2>Okolí</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea aperiam
                excepturi tempora nihil id accusamus magnam soluta ipsa, modi
                repudiandae perferendis minus. Consequatur, eius? Nobis sint beatae
                alias quia.
              </p>
            </div>
            <div className="okoliFoto scroll-reveal-ambiente" id="okoliFoto">
              <img src="../../img/rybnik.jpg" alt="rybnik" />
            </div>
          </div>
          <div className="things-needed" id="things-needed">
            {/*<h2 class="thing-heading">Seznam věcí</h2>*/}
            <div className="card clothes">
              <h2>Oblečení a obuv</h2>
              <div className="card-content">
                <div className="card-img">
                  <img
                    src="../../img/tshirt-icon-orange.svg"
                    alt="obleceni ikona"
                    width={200}
                  />
                </div>
                <ul className="clothes-list">
                  <li>2x teplé ponožky a dostatečný počet těch normálních,</li>
                  <li>4x triko s krátkým rukávem,</li>
                  <li>2x triko s dlouhým rukávem,</li>
                  <li>3x mikinu,</li>
                  <li>větrovku,</li>
                  <li>alespoň 2 - 3x krátké kalhoty (kraťasy),</li>
                  <li>4x tepláky, dlouhé kalhoty</li>
                </ul>
                <ul className="clothes-list">
                  <li>plavky,</li>
                  <li>
                    oblečení na spaní (ideálně tepláky, triko s dlouhým rukávem, svetr,
                    ponožky),
                  </li>
                  <li>oblečení do města,</li>
                  <li>šátek.</li>
                  <li>sportovní obuv</li>
                  <li>nepromokavé boty (holínky),</li>
                  <li>přezůvky.</li>
                </ul>
              </div>
            </div>
            <div className="card hygiene">
              <h2>Hygiena</h2>
              <div className="card-content">
                <div className="card-img">
                  <img
                    src="../../img/hygiene-icon-orange.svg"
                    alt="hygiena ikona"
                    width={200}
                  />
                </div>
                <ul className="hygiene-list">
                  <li>ručníky (ideálně 2 ks),</li>
                  <li>zubní kartáček + pasta,</li>
                  <li>mýdlo,</li>
                  <li>šampón (sprchový gel),</li>
                  <li>hřeben,</li>
                  <li>toaletní papír,</li>
                  <li>opalovací krém,</li>
                  <li>papírové kapesníky,</li>
                  <li>dětské vlhčené ubrousky.</li>
                </ul>
              </div>
            </div>
            <div className="card others">
              <h2>Ostatní</h2>
              <div className="card-content">
                <div className="card-img">
                  <img
                    src="../../img/cards-icon-orange.svg"
                    alt="others ikona"
                    width={200}
                  />
                </div>
                <ul className="others-list">
                  <li>hry (např. karty, pexeso, atd.),</li>
                  <li>dopisní papíry a obálky s poštovní známkou,</li>
                  <li>psací potřeby (pastelky, tužky, atd.),</li>
                  <li>repelent,</li>
                  <li>náhradní baterie,</li>
                  <li>látkový vak na špinavé prádlo.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="visits-posts" id="visits">
            {/*<h2>Návštěvy a pošta</h2>*/}
            <div className="section visits">
              <h3>Návštěvy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas
                nemo dicta culpa obcaecati, suscipit pariatur libero possimus dolore
                porro excepturi laudantium molestias error, explicabo praesentium.
                Accusantium neque quia iste!
              </p>
            </div>
            <div className="section post" id="post">
              <h3>Pošta</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas
                nemo dicta culpa obcaecati, suscipit pariatur libero possimus dolore
                porro excepturi laudantium molestias error, explicabo praesentium.
                Accusantium neque quia iste!
              </p>
            </div>
          </div>
        </main>
      </Layout >
    )
  }
}