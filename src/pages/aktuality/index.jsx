import React from 'react'

import Layout from '../../components/Layout'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Articles from '../../components/Articles'

export default class Aktuality extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title={`Aktuality | Tábor Vysočina 3. turnus`}
          meta={[
            {
              name: `description`,
              content: 'Aktuality organizační informace o dění na táboře Vysočina 3. turnus v Novém Městě na Moravě',
            },
            {
              name: "keywords",
              content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus, Aktuality, Informace, Články',
            },
          ]} />
        <main className="telo">
          <Articles />
          <div className="vylet">
            <h1 className="nazev_vyletu"><a href="#">Výlet do Berouna</a></h1>
            <div className="text_vyletu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio soluta qui excepturi. Doloremque necessitatibus aperiam tempora doloribus odio ea. Voluptate quia delectus doloremque quisquam similique provident facere aliquam dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet quos hic nemo, magnam, atque libero eum totam omnis ad debitis officiis. Consequuntur iusto aliquid perspiciatis! Suscipit repudiandae rerum ut.</p>
              <a className="more" href="#">více...</a>
            </div>
            <a className="foto-href" href="#"><img className="foto" id="foto-id" src="../../img/rybnik.jpg" alt="fotka-rybniku" /></a>
          </div>
          <div className="vylet">
            <h1 className="nazev_vyletu"><a href="#">Příjezd na tábor</a></h1>
            <div className="text_vyletu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio soluta qui excepturi. Doloremque necessitatibus aperiam tempora doloribus odio ea. Voluptate quia delectus doloremque quisquam similique provident facere aliquam dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet quos hic nemo, magnam, atque libero eum totam omnis ad debitis officiis. Consequuntur iusto aliquid perspiciatis! Suscipit repudiandae rerum ut.</p>
              <a className="more" href="#">více...</a>
            </div>
            <a className="foto-href" href="#"><img className="foto" src="../../img/budova.jpg" alt="fotka-rybniku" /></a>
          </div>
          <div className="vylet">
            <h1 className="nazev_vyletu"><a href="#">Fotky z Velikonoc</a></h1>
            <div className="text_vyletu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio soluta qui excepturi. Doloremque necessitatibus aperiam tempora doloribus odio ea. Voluptate quia delectus doloremque quisquam similique provident facere aliquam dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet quos hic nemo, magnam, atque libero eum totam omnis ad debitis officiis. Consequuntur iusto aliquid perspiciatis! Suscipit repudiandae rerum ut.</p>
              <a className="more" href="#">více...</a>
            </div>
            <a className="foto-href" href="#"><img className="foto" src="../../img/areal.PNG" alt="fotka-rybniku" /></a>
          </div>
          <div className="vylet">
            <h1 className="nazev_vyletu"><a href="#">Výlet do Berouna</a></h1>
            <div className="text_vyletu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio soluta qui excepturi. Doloremque necessitatibus aperiam tempora doloribus odio ea. Voluptate quia delectus doloremque quisquam similique provident facere aliquam dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet quos hic nemo, magnam, atque libero eum totam omnis ad debitis officiis. Consequuntur iusto aliquid perspiciatis! Suscipit repudiandae rerum ut.</p>
              <a className="more" href="#">více...</a>
            </div>
            <a className="foto-href" href="#"><img className="foto" src="../../img/rybnik.jpg" alt="fotka-rybniku" /></a>
          </div>
          <div className="vylet">
            <h1 className="nazev_vyletu"><a href="#">Výlet do Berouna</a></h1>
            <div className="text_vyletu">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio soluta qui excepturi. Doloremque necessitatibus aperiam tempora doloribus odio ea. Voluptate quia delectus doloremque quisquam similique provident facere aliquam dolores?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eveniet quos hic nemo, magnam, atque libero eum totam omnis ad debitis officiis. Consequuntur iusto aliquid perspiciatis! Suscipit repudiandae rerum ut.</p>
              <a className="more" href="#">více...</a>
            </div>
            <a className="foto-href" href="#"><img className="foto" src="../../img/rybnik.jpg" alt="fotka-rybniku" /></a>
          </div>
        </main>
      </Layout>
    )
  }
}