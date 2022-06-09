import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GalleriesTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  galleries,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="Gallery-post-body">
      
    </div>
  )
}

GalleriesTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  galleries: PropTypes.string,
  date: PropTypes.string,
}

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GalleriesTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Optika Volyně">
            <title>{`${post.frontmatter.date}`}</title>
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

GalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default GalleryPost

export const pageQuery = graphql`
  query GalleryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "D. MMMM YYYY", locale: "cs")
        media
      }
    }
  }
`