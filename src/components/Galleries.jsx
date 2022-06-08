import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Galleries extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>fsdfs</div>
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
        markdownRemark(frontmatter: { templateKey: { eq: "gallery-post" } }) {
            frontmatter {
              date
            }
          }
        }
     `}
    render={(data, count) => <Galleries data={data} count={count} />}
  />
)