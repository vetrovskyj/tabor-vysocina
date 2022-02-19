import React, { useState } from "react";
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ArticlesPreview from '../components/ArticlesPreview'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  uvodni_text,
  uvodni_foto,
  section,
  disclaimer,
}) => {
  function sendEmail(e) {
    e.preventDefault();
    const carouselSlide = document.querySelector('.fotka');
    const carouselImages = document.querySelectorAll('.fotka img');
    const dots = document.querySelectorAll('.tecka input');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 2;
    const size = carouselSlide.clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    dots[2].style.opacity = "0.3";

    nextBtn.addEventListener('click', () => {
      if (counter >= carouselImages.length - 1) return;
      dots[counter].style.opacity = "1";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      dots[counter].style.opacity = "0.3";
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      if (counter <= 3) {
        carouselImages[counter - 1].style.opacity = "0.3";
        carouselImages[counter + 1].style.opacity = "0.3";
        carouselImages[counter].style.opacity = "1";
      }
      if (counter === 4) {
        carouselImages[counter].style.opacity = "1";
        carouselImages[counter - 1].style.opacity = "0.3";
      }
      console.log(counter);

    });

    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      dots[counter].style.opacity = "1";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      dots[counter].style.opacity = "0.3";
      carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
      if (counter >= 1) {
        carouselImages[counter + 1].style.opacity = "0.3";
        carouselImages[counter - 1].style.opacity = "0.3";
        carouselImages[counter].style.opacity = "1";
      }
      if (counter === 0) {
        carouselImages[counter].style.opacity = "1";
        carouselImages[counter + 1].style.opacity = "0.3";
      }
    });

    dots[0].addEventListener('click', () => {
      dots[counter].style.opacity = "1";
      carouselImages[counter].style.opacity = "0.3";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * 0) + 'px)';
      counter = 0;
      carouselImages[counter].style.opacity = "1";
      dots[0].style.opacity = "0.3";
    });

    dots[1].addEventListener('click', () => {
      dots[counter].style.opacity = "1";
      carouselImages[counter].style.opacity = "0.3";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * 1) + 'px)';
      counter = 1;
      carouselImages[counter].style.opacity = "1";
      dots[1].style.opacity = "0.3";
    });

    dots[2].addEventListener('click', () => {
      dots[counter].style.opacity = "1";
      carouselImages[counter].style.opacity = "0.3";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * 2) + 'px)';
      counter = 2;
      carouselImages[counter].style.opacity = "1";
      dots[2].style.opacity = "0.3";
    });

    dots[3].addEventListener('click', () => {
      dots[counter].style.opacity = "1";
      carouselImages[counter].style.opacity = "0.3";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * 3) + 'px)';
      counter = 3;
      carouselImages[counter].style.opacity = "1";
      dots[3].style.opacity = "0.3";
    });

    dots[4].addEventListener('click', () => {
      dots[counter].style.opacity = "1";
      carouselImages[counter].style.opacity = "0.3";
      carouselSlide.style.transition = "transform 0.4s ease-in-out";
      carouselSlide.style.transform = 'translateX(' + (-size * 4) + 'px)';
      counter = 4;
      carouselImages[counter].style.opacity = "1";
      dots[4].style.opacity = "0.3";
    });

    document.querySelector('.fotky').addEventListener('touchstart', handleTouchStart, false);
    document.querySelector('.fotky').addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
          if (counter >= carouselImages.length - 1) return;
          dots[counter].style.opacity = "1";
          carouselSlide.style.transition = "transform 0.4s ease-in-out";
          counter++;
          dots[counter].style.opacity = "0.3";
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          if (counter <= 3) {
            carouselImages[counter - 1].style.opacity = "0.3";
            carouselImages[counter + 1].style.opacity = "0.3";
            carouselImages[counter].style.opacity = "1";
          }
          if (counter === 4) {
            carouselImages[counter].style.opacity = "1";
            carouselImages[counter - 1].style.opacity = "0.3";
          }
          console.log(counter);
        } else {
          if (counter <= 0) return;
          dots[counter].style.opacity = "1";
          carouselSlide.style.transition = "transform 0.4s ease-in-out";
          counter--;
          dots[counter].style.opacity = "0.3";
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          if (counter >= 1) {
            carouselImages[counter + 1].style.opacity = "0.3";
            carouselImages[counter - 1].style.opacity = "0.3";
            carouselImages[counter].style.opacity = "1";
          }
          if (counter === 0) {
            carouselImages[counter].style.opacity = "1";
            carouselImages[counter + 1].style.opacity = "0.3";
          }
        }

      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }
return (
  <main className="telo-homepage">
    <div className="top-site">
      <div className="fotky">
        <div className="fotka">
          <img className="foto3" id="lastClone" src="../img/foto3.jpg" alt="foto3" />
          <img className="foto1" src="../img/foto1copy.jpg" alt="foto1" />
          <img className="foto2" src="../img/foto2.jpg" alt="foto2" />
          <img className="foto3" src="../img/foto3.jpg" alt="foto3" />
          <img className="foto1" id="firstClone" src="../img/foto1copy.jpg" alt="foto1" />
        </div>
        <div className="sipky">
          <div className="leva">
            <input id="prevBtn" type="image" src="../img/leva.png" name="leva" alt="leva-sipka" />
          </div>
          <div className="tecka">
            <input className="dot" type="image" src="../img/dot.png" name="leva" alt="tecka-poradi-obrazku" />
            <input className="dot" type="image" src="../img/dot.png" name="leva" alt="tecka-poradi-obrazku" />
            <input className="dot" type="image" src="../img/dot.png" name="leva" alt="tecka-poradi-obrazku" />
            <input className="dot" type="image" src="../img/dot.png" name="leva" alt="tecka-poradi-obrazku" />
            <input className="dot" type="image" src="../img/dot.png" name="leva" alt="tecka-poradi-obrazku" />
          </div>
          <div className="prava">
            <input id="nextBtn" type="image" src="../img/prava.png" name="prava" alt="prava-sipka" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="text-homepage">
          <div className="text-heading">
            <h2>Zábava. Zážitky.</h2>
            <h2>Vysočina</h2>
          </div>
          <p>Tábor Vysočina je policejní <strong>tábor</strong> s dlouholetou tradicí, skvělou partou, hrami, péčí o děti a hlavně <strong>zábavou</strong>. Areál pobytu se nachází na Vysočině. K dispozici máme 3 hřiště, hlavní budovu, chatky a
            <strong>krásnou přírodu.</strong></p>
        </div>
        <div className="btn">
          <a className="tlacitko" href="#bottom-site">Čti více</a>
        </div>
      </div>
    </div>
    <div className="bottom-site" id="bottom-site">
      <div className="boxes">
        <div className="box transition">
          <img alt="ikona kamaradu" src="../img/kamaradi_ikona.svg" width={100} />
          <div className="box-desc">
            <h2>Kamarádi</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
          </div>
        </div>
        <div className="box transition">
          <img alt="ikona her" src="../img/catapult_ikona.svg" width={100} />
          <div className="box-desc">
            <h2>Hry</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
          </div>
        </div>
        <div className="box transition">
          <img alt="ikona dobrodruzstvi" src="../img/dobro_ikona.svg" width={100} />
          <div className="box-desc">
            <h2>Dobrodružství</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis sunt vero, numquam repellat, obcaecati unde in reprehenderit nihil aut accusamus nostrum iure amet voluptates minus non, officia cum esse voluptas?</p>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="news-heading">
          <h2>Aktuality</h2>
          <img src="../img/new_ikona.svg" alt="new icon" />
        </div>
        <div className="news-content" />
      </div>
    </div>
    <Helmet>
      <script src={withPrefix('./scripts/app.js')} type="text/javascript" />
      <script src={withPrefix('./scripts/lightbox.js')} type="text/javascript" />
      <script src={withPrefix('./scripts/paste.js')} type="text/javascript" />
      <script src={withPrefix('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js')} type="text/javascript" />
    </Helmet>
  </main>
)}

IndexPageTemplate.propTypes = {
  disclaimer: PropTypes.string,
  uvodni_text: PropTypes.shape({
    firstRow: PropTypes.string,
    coloredText: PropTypes.string,
    secondRow: PropTypes.string,
    thirdRow: PropTypes.string,
  }),
  uvodni_foto: PropTypes.shape({
    obrazek1: PropTypes.string,
    obrazek2: PropTypes.string,
    obrazek3: PropTypes.string,
  }),
  section: PropTypes.shape({
    section_heading: PropTypes.string,
    section_text: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  //const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Helmet
        title={`Domovská stránka | Tábor Vysočina 3. turnus`}
        meta={[
          {
            name: `description`,
            content: 'Web Táboru Vysočina 3. turnus, který je organizovanán Policií České republiky každé léto v Novém Městě na Moravě',
          },
          {
            name: "keywords",
            content: 'Tábor, Vysočina, PČR, Policie, Dětský tábor, Nové Město na Moravě, 3. turnus',
          },
        ]}
      />
      <IndexPageTemplate
      //disclaimer={frontmatter.disclaimer}
      //uvodni_text={frontmatter.uvodni_text}
      //uvodni_foto={frontmatter.uvodni_foto}
      //section={frontmatter.section}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      //frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage
/*
export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        disclaimer
        uvodni_text {
          firstRow
          coloredText
          secondRow
          thirdRow
        }
        uvodni_foto {
          obrazek1 { relativePath }
          obrazek2 { relativePath }
          obrazek3 { relativePath }
        }
        section {
          section_heading
          section_text
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
*/