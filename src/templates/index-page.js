import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  heading,
  subheading,
  uvodni_foto,
  section,
}) => (
   <main className="homepage-main">
   <div className="slider">
     <div className="sliderphoto" onLoad="sliderFunc">
      <img src={"../img/"+uvodni_foto.obrazek1.relativePath} className="photo" width={1920} alt="sliderphoto" />
        <img src={"../img/"+uvodni_foto.obrazek2.relativePath} className="photo" width={1920} alt="sliderphoto" />
        <img src={"../img/"+uvodni_foto.obrazek3.relativePath} className="photo" width={1920} alt="sliderphoto" />
     </div>
     <div className="slider-sale-and-text">
        <p className="slider-sale">Sleva</p>
        <div className="slider-text">
          <p className="slider-text-sale">{subheading} <br />značky <span className="slider-text-brand">{heading}</span></p>
        </div>
        <div className="rectangles">
          <div className="rectangle" />
          <div className="rectangle" />
          <div className="rectangle" />
        </div>
      </div>
   </div>
   <div className="icons">
     <a href="./sluzby/optometrie/" className="icon-container">
       <h2>Optometrie</h2>
       <img alt="optomerty-icon" src="../img/optometry.png" />
     </a>
     <a href="./sluzby/bryle/" className="icon-container">
       <h2>Brýle</h2>
       <img alt="glasses-icon" src="../img/glasses.png" />
     </a>
     <a href="./sluzby/doplnky/" className="icon-container">
       <h2>Doplňky</h2>
       <img alt="accessories-icon" src="../img/accessories.png" />
     </a>
   </div>
   <div className="bottom-section">
      <section>
        <h2>{section.section_heading}</h2>
        <p>{section.section_text}</p>
      </section>
      <PreviewCompatibleImage className="section-photo" imageInfo={section.image1} />
  </div>
   <div className="info-footer-container">
     <div className="info-footer">
       <div className="info-contacts">
         <div className="info-contact">
           <img alt="person-icon" src="../img/person-icon.png" />
           <p>Bc. Jitka Hronková</p>
         </div>
         <div className="info-contact">
           <img alt="info-icon" src="../img/info-icon.png" />
           <p>IČO: 45645687</p>
         </div>
         <div className="info-contact">
           <img alt="location-icon" src="../img/location-icon.png" />
           <p>nám. Svobody 14, Volyně, 387 01</p>
         </div>
       </div>
       <div className="aditional-links">
         <a href="/cookies/">Používání cookies</a>
         <a href="/autorska-prava/">Autorská práva</a>
       </div>
       <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank"><img className="fb-icon" alt="facebook-icon" src="../img/facebook-icon.png" /></a>
     </div>
   </div>
   <Helmet>
      <script src={withPrefix('./scripts/slider.js')} type="text/javascript" />
      <script src={withPrefix('./scripts/hamburger.js')} type="text/javascript" />
    </Helmet>
 </main>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        uvodni_foto={frontmatter.uvodni_foto}
        section={frontmatter.section}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
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
