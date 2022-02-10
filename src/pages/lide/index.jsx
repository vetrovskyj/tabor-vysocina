import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

export default class Lide extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={`Lidé | Tábor Vysočina 3. turnus`}
          meta={[
            {
              name: `description`,
              content: 'Seznam a popis praktikantů a vedoucích z tábora Vysočina 3. turnus v Novém Městě na Moravě',
            },
            {
              name: "keywords",
              content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus, Vedoucí, Praktikant, Instruktor, Lidé',
            },
          ]} />
        <main className="telo-lide">
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>OV2</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jan Větrovský</p>
                <p>P10</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile_foto.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>P3</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>OV10</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>P3</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>OV12</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>OV5</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <div className="osoba">
            <div className="text">
              <div className="jmeno">
                <p>Jméno Příjmení</p>
                <p>P4</p>
              </div>
              <p className="profile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                recusandae impedit, facilis nemo mollitia quasi expedita dolorem vel, a
                veritatis enim quod laborum, adipisci iure nesciunt laboriosam iusto.
                Dolor, dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti recusandae impedit, facilis nemo mollitia quasi expedita
                dolorem vel, a veritatis enim quod laborum, adipisci iure nesciunt
                laboriosam iusto. Dolor, dolorum.
              </p>
            </div>
            <div className="profile-photo">
              <img src="../../img/profile.jpg" alt="profile" />
            </div>
          </div>
          <Helmet>
            <script src={withPrefix('../scripts/lide.js')} type="text/javascript" />
          </Helmet>
        </main>
      </Layout>
    )
  }
}