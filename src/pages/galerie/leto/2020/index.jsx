import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../../components/Layout'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useMemo } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types'

import { Container, Col } from 'react-bootstrap';


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
        <Container>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className='grid'>
                {data.gallery.edges.map(({ node }) => (
                  <Col lg={4} md={6} key={node.id} className="py-3">
                    {/* {node.base.split('-').join(' ').split('.')[0]} */}
                    <a href={node.publicURL}>
                      <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base.split('-').join(' ').split('.')[0]} />
                    </a>
                  </Col>
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </Container>
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
      relativeDirectory: {eq: "leto-2020"}}
      sort: {fields: id, order: ASC}) {
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