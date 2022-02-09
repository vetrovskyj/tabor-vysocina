import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import SaleBanner from '../components/SaleBanner'
import ArticlesPreview from '../components/ArticlesPreview'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  uvodni_text,
  uvodni_foto,
  section,
  disclaimer,
}) => (
  <main className="homepage-main">
    
    
  </main>
)

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
        title={`Domovská stránka | Optika Volyně`}
        meta={[
          {
            name: `description`,
            content: 'Web Optiky Volyně, která prodává brýle, optické produkty a poskytuje služby péče o zrak',
          },
          {
            name: "keywords",
            content: 'Optika, Optometrie, Volyně, Brýle, Zrak, Oči',
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