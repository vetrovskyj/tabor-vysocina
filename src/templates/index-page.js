import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  heading,
  subheading,
}) => (
  <main className="homepage-main">
    <div className="slider">
      <div className="sliderphoto" onLoad="sliderFunc">
        <img className="photo" width={1920} alt="sliderphoto" src="../img/sliderphoto4.jpg" />
        <img className="photo" width={1920} alt="sliderphoto" src="../img/sliderphoto1.png" />
        <img className="photo" width={1920} alt="sliderphoto" src="../img/sliderphoto6.jpg" />
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
      <a href="./sluzby/index.html#optometrie" className="icon-container">
        <h2>Optometrie</h2>
        <img alt="optomerty-icon" src="../img/optometry.png" />
      </a>
      <a href="./sluzby/index.html#bryle" className="icon-container">
        <h2>Brýle</h2>
        <img alt="glasses-icon" src="../img/glasses.png" />
      </a>
      <a href="./sluzby/index.html#doplnky" className="icon-container">
        <h2>Doplňky</h2>
        <img alt="accessories-icon" src="../img/accessories.png" />
      </a>
    </div>
    <div className="bottom-section">
      <section>
        <h2>Nadpis sekce</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed optio voluptate vitae eligendi tempore ex animi nesciunt, dolor beatae illum totam, odio labore assumenda. Architecto ut ex odit doloremque reprehenderit.</p>
      </section>
      <img alt="glasses-show-illustration-photo" src="../img/glassesshow.png" />
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
          <a href="#">Obchodní podmínky</a>
          <a href="#">Autorská práva</a>
        </div>
        <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/"><img className="fb-icon" alt="facebook-icon" src="../img/facebook-icon.png" /></a>
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
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
      }
    }
  }
`
