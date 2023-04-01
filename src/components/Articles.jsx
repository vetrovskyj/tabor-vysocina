import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Articles extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="article-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div className={`article-container`} key={post.id}>
              <article className="vylet">
                <p className="nazev_vyletu">
                  <Link
                    className="article-title"
                    to={`/aktuality/2022-06-26-mame-novy-web/`}>
                    {post.frontmatter.title}
                  </Link>
                  <span className="article-date">
                    {post.frontmatter.date}
                  </span>
                </p>
                <p className="text_vyletu">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="more" to={`/aktuality/2022-06-26-mame-novy-web/`}>
                    více...
                  </Link>
                </p>
                {post.frontmatter.featuredimage ? (
                  <Link
                    className="foto-href"
                    to={`/aktuality/2022-06-26-mame-novy-web/`}>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `náhledový obrázek ke článku ${post.frontmatter.title}`,
                      }}
                    />
                  </Link>
                ) : null}
              </article>
            </div>
          ))}
      </div>
    )
  }
}

Articles.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArticleRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: { frontmatter: { templateKey: { eq: "article-post" } } }
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
                title
                templateKey
                date(formatString: "D. MMMM YYYY", locale: "cs")
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Articles data={data} count={count} />}
  />
)