import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../../components/Layout'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMemo } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types'


const Galerka = ({ data }) => {
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
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className='grid'>
                {data.gallery.edges.map(({ node }) => (  
                    <a className='grid-item' href={node.publicURL}>
                      <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-').join(' ').split('.')[0]} />
                    </a>
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
      )
    }
  }, [authorized, password, invalid])

  const checkpassword = useCallback(() => {
    if (password.toLowerCase() === "vysočina66") {
      setAuthorized(true);
    } else {
      setInvalid(true);
    }
  }, [password])

  return (

    <Layout>
      <div>
        {content}
      </div>
    </Layout>)
}

Galerka.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Galerka

export const pageQuery = graphql`
  query {
    gallery: allFile(filter: {
      relativeDirectory: {eq: "leto-2022"}}
      sort: {fields: base, order: ASC}) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 200
              width: 300
              transformOptions: {fit: COVER}
              placeholder: BLURRED
              webpOptions: {quality: 80}
            )
          }
        }
      }
    }
  }
`