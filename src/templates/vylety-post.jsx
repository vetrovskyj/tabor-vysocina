import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
  title: PropTypes.string,
  helmet: PropTypes.object,
  galleries: PropTypes.string,
  title: PropTypes.string,
  password: PropTypes.string,
  fotky: PropTypes.string,
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
      {post.frontmatter.fotky.map((item, index) => <div className='grid-item'><LazyLoadImage effect="blur" key={index} src={item} /></div>)}
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
        fotky
        password
      }
    }
  }
`