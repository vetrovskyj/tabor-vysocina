import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { useMemo } from 'react'
import { useCallback } from 'react'
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'


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
  media: PropTypes.string,
  nahledacek: PropTypes.string
}

const GalleryPost = ({ data }) => {
  const { markdownRemark: post } = data

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('')
  const [invalid, setInvalid] = useState(false);

  const content = useMemo(() => {
    if (!authorized) {
      return <>
        <div className='password'>
          <h1>K zobrazení fotek zadejte <br></br>prosím <strong>heslo</strong></h1>
          <input value={password} className="password-input" onKeyPress={() => {
            checkpassword();
          }} onChange={(e) => {
            setInvalid(false)
            setPassword(e.target.value)
          }}></input>
          <button className="password-button" type="submit" onClick={() => {
            checkpassword();
          }}>Potvrdit</button>
          {invalid && <p className='wrong-password'>Nesprávné heslo</p>}
        </div>
      </>;
    } else {
      return (
        <>
        <SimpleReactLightbox>
          <SRLWrapper>
          <div className='grid'>
            {post.frontmatter.media.map((item, index) => <a className='grid-item' href={item}><img key={index} src={item} /></a>)}
          </div>
          </SRLWrapper>
        </SimpleReactLightbox>
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
      <div>
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