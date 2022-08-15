import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Galleries extends React.Component {
  render() {
    const { data } = this.props
    const { edges: galleries } = data.allMarkdownRemark

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };

    return (
      <div className='years-section'>
        <h2>Léto</h2>
        <Slider {...settings}>      
              <div  className="years-item-container">                
                  <Link className="gallery-carousel-container" to={"./leto/2022/"}>
                    <img alt="náhledový obrázek ke galerii" src="../../../img/Facebook/leto2020_292.jpg" />
                    <Link
                      className='gallery-carousel-text'
                      to="./leto/2022/">
                      2022
                    </Link>
                  </Link>
              </div>
              <div  className="years-item-container">                
                  <Link className="gallery-carousel-container" to={"./leto/2021/"}>
                    <img alt="náhledový obrázek ke galerii" src="../../../img/Facebook/leto2021_074.jpg" />
                    <Link
                      className='gallery-carousel-text'
                      to="./leto/2021/">
                      2021
                    </Link>
                  </Link>
              </div>
              <div  className="years-item-container">                
                  <Link className="gallery-carousel-container" to={"./leto/2020/"}>
                    <img alt="náhledový obrázek ke galerii" src="../../../img/Facebook/leto2019_042.jpg" />
                    <Link
                      className='gallery-carousel-text'
                      to="./leto/2020/">
                      2020
                    </Link>
                  </Link>
              </div>
        </Slider>
      </div>
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
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: { frontmatter: { templateKey: { eq: "gallery-post" } } }
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
                nahledacek
              }
          }
        }
      }
    }
`}
    render={(data, count) => <Galleries data={data} count={count} />}
  />
)