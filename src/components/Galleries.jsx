import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Galleries extends React.Component {
  render() {
    const { data } = this.props
    const { edges: galleries } = data.allMarkdownRemark

    return (
      <div>
        {galleries &&
          galleries.map(({ node: gallery }) => (
            <div key={gallery.date}>
              <Link
                className="article-title"
                to={gallery.fields.slug}>
                {gallery.frontmatter.date}
              </Link>
              {gallery.frontmatter.featuredimage ? (
                  <div className="foto-href">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: gallery.frontmatter.featuredimage,
                        alt: `náhledový obrázek ke galerii ${gallery.frontmatter.date}`,
                      }}
                    />
                  </div>
                ) : null}
            </div>
          ))}
      </div>
    )
  }
}

Galleries.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GalleryRollQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "gallery-post" } } }
        ) {
          edges {
            node {
              excerpt(
                pruneLength: 350
                format: PLAIN
                )
              id
              fields {
                slug
              }
              frontmatter {
                date(formatString: "YYYY", locale: "cs")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
          }
        }
      }
    }
`}
    render={(data, count) => <Galleries data={data} count={count} />}
  />
)