import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { useMemo } from 'react'
import { useCallback } from 'react'


export const GalleriesTemplate = ({
  contentComponent,
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
  title: PropTypes.string,
  password: PropTypes.string,
}

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState(false);

  const content = useMemo(() => {
    if (!authorized) {
      return <>
      <input value={password} onChange={(e) => { 
        setInvalid(false)
        setPassword(e.target.value)
      }}></input>
      <button onClick={() => {
        checkpassword();
      }}>kamo</button>
      {invalid && <p>jses curak</p>}
      </>;
    } else {
      return (
        <>
          {post.frontmatter.media.map((item, index) => <div className='grid-item'><img key={index} src={item} /></div>)}
        </>
      )
    }
  }, [authorized, password, invalid])

  const checkpassword = useCallback(() => {
    if (password === post.frontmatter.password) {
      setAuthorized(true);
    } else {
      setInvalid(true);
    }
  }, [password])

  return (
    <Layout>
      <GalleriesTemplate
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
        {content}
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
        title
        password
        media
      }
    }
  }
`