import React, { useState } from "react";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ArticlesPreview from '../components/ArticlesPreview'
import Articles from '../components/Articles'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  uvodni_text,
  uvodni_foto,
  section,
  disclaimer,
}) => {

  return (
    <main className="telo-homepage">
      <div className="top-site">
        <div className="fotky">
          <div className="fotka">
            <img className="foto3" id="lastClone" src="../img/bradavice.png" alt="foto3" />
          </div>
        </div>
        <div className="info">
          <div className="text-homepage">
            <div className="text-heading">
              <h2>Zábava. Zážitky.</h2>
              <h2>Vysočina</h2>
            </div>
            <p>Tábor Vysočina je policejní <strong>dětský tábor</strong> s dlouholetou tradicí, skvělou partou a hlavně <strong>zábavou</strong>. K dispozici máme 3 hřiště, hlavní budovu, chatky a <strong>krásnou přírodu.</strong></p>
          </div>
          <div class="scroll-downs">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-site" id="bottom-site">
        <div className="boxes">
          <div className="box transition">
            <img alt="ikona kamaradu" src="../img/kamaradi_ikona.svg" width={100} />
            <div className="box-desc">
              <h2>Kamarádi</h2>
              <p>Děti jsou rozdělené do <strong>dívčích</strong> a <strong>klučičích</strong> oddílů. V oddílech si jsou věkově velmi blízko a brzy tak vznikají přátelské vztahy. Během CTH, <strong>diskoték</strong> a podobných akcí se navíc děti <strong>rychle seznámí</strong> i s dalšími táborníky.</p>
            </div>
          </div>
          <div className="box transition">
            <img alt="ikona her" src="../img/catapult_ikona.svg" width={100} />
            <div className="box-desc">
              <h2>Hry</h2>
              <p>V průběhu tábora hrajeme spoustu her v oddílech i v rámci celého tábora. Děti se tak mohou těšit na tematickou <strong>celotáborovou hru (CTH)</strong>, sportovní a míčové hry, klasické <strong>táborové hry</strong> i noční dobrodružné <strong>bojovky</strong>.</p>
            </div>
          </div>
          <div className="box transition">
            <img alt="ikona dobrodruzstvi" src="../img/dobro_ikona.svg" width={100} />
            <div className="box-desc">
              <h2>Dobrodružství</h2>
              <p>To pravé táborové dobrodružství? Na Vysočině rozhodně. Nejlepší letní zážitky děti nezískávají jen z her, ale čekají na ně třeba akční <strong>policejní ukázky</strong>, získávání a používání <strong>táborových dovedností</strong> i celodenní <strong>výlet</strong>.</p>
            </div>
          </div>
        </div>
        <div className="news">
          <div className="news-heading">
            <h2>Aktuality</h2>
            <img src="../img/new_ikona.svg" alt="new icon" />
          </div>
          <div className="news-content">
            <Articles />
          </div>
        </div>
      </div>
    </main>
  )
}

IndexPageTemplate.propTypes = {
  disclaimer: PropTypes.string,
  uvodni_text: PropTypes.shape({
    firstRow: PropTypes.string,
    coloredText: PropTypes.string,
    secondRow: PropTypes.string,
    thirdRow: PropTypes.string,
  }),
  uvodni_foto: PropTypes.shape({
    obrazek1: PropTypes.string,
    obrazek2: PropTypes.string,
    obrazek3: PropTypes.string,
  }),
  section: PropTypes.shape({
    section_heading: PropTypes.string,
    section_text: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`Domovská stránka | Tábor Vysočina 3. turnus`}
        meta={[
          {
            name: `description`,
            content: 'Web Táboru Vysočina 3. turnus, který je organizovanán Policií České republiky každé léto v Novém Městě na Moravě',
          },
          {
            name: "keywords",
            content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus',
          },
        ]}
      />
      <IndexPageTemplate
      //disclaimer={frontmatter.disclaimer}
      //uvodni_text={frontmatter.uvodni_text}
      //uvodni_foto={frontmatter.uvodni_foto}
      //section={frontmatter.section}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      //frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage
/*
export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        disclaimer
        uvodni_text {
          firstRow
          coloredText
          secondRow
          thirdRow
        }
        uvodni_foto {
          obrazek1 { relativePath }
          obrazek2 { relativePath }
          obrazek3 { relativePath }
        }
        section {
          section_heading
          section_text
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
*/