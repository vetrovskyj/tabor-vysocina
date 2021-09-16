import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Articles extends React.Component {
    constructor(props) {
        super(props);this.state = {
          hovered: false
        };
      }
    
      onMouseEnter = e => {
        this.setState({ hovered: true });
      };
    
      onMouseLeave = e => {
        this.setState({ hovered: false });
      };
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { hovered } = this.state;
    const btnStyle = hovered ? { backgroundColor: "#42AECC" } : {};
    const titleStyle = hovered ? { color: "#42AECC" } : {};

    return (
      <div className="article-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="article-container" key={post.id}>
              <article
                className={`article-item ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  <p className="article-title-container">
                    <Link
                      className="article-title"
                      to={post.fields.slug}
                      onMouseEnter={this.onMouseEnter} 
                      onMouseLeave={this.onMouseLeave}
                      style={titleStyle}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span className="article-date">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p className="article-text">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="btn" to={post.fields.slug} 
                  style={btnStyle} 
                  onMouseEnter={this.onMouseEnter} 
                  onMouseLeave={this.onMouseLeave}>
                    více
                  </Link>
                </p>
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
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "article-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Articles data={data} count={count} />}
  />
)