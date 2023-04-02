import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Galleries from '../../components/Galleries'
import Velikonoce from '../../components/Velikonoce'
import Vylety from '../../components/Vylety'

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
          <Velikonoce />
          {/*<Vylety />*/}
          <Helmet>
            <script src={withPrefix('../scripts/slider.js')} type="text/javascript" />
          </Helmet>
        </main>
        <div className="footer-to-bottom"></div>
      </Layout>
    )
  }
}