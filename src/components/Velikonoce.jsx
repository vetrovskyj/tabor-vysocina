import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class Velikonoce extends React.Component {
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
      <div>
        <div className='years-section'>
          <h2>Velikonoce</h2>
          <Slider {...settings}>
            {galleries &&
              galleries.map(({ node: gallery }) => (
                <div key={gallery.title} className="years-item-container">
                  {gallery.frontmatter.nahledacek ? (
                    <Link className="gallery-carousel-container" to={gallery.fields.slug}>
                      <img alt="náhledový obrázek ke galerii" src={gallery.frontmatter.nahledacek} />
                      <Link
                        className='gallery-carousel-text'
                        to={gallery.fields.slug}>
                        {gallery.frontmatter.title}
                      </Link>
                    </Link>
                  ) : null}
                </div>
              ))}
          </Slider>
        </div>
      </div>
    )
  }
}

Velikonoce.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query VelikonoceRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: { frontmatter: { templateKey: { eq: "velikonoce-post" } } }
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
    render={(data, count) => <Velikonoce data={data} count={count} />}
  />
)