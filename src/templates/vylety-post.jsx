import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VyletyTemplate = ({
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="Gallery-post-body">
      
    </div>
  )
}

VyletyTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  galleries: PropTypes.string,
  title: PropTypes.string,
  password: PropTypes.string,
  media: PropTypes.string,
  nahledacek: PropTypes.string
}

const VyletyPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VyletyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content="gallery"
            />
          </Helmet>
        }
      />
      <div className='grid'>
      {post.frontmatter.media.map((item, index) => <div className='grid-item'><img key={index} src={item} /></div>)}
      </div>
      <div className="footer-to-bottom"></div>
    </Layout>
  )
}

VyletyPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default VyletyPost

export const pageQuery = graphql`
  query VyletyPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        media
        password
      }
    }
  }
`