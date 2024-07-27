import React, { useState, useEffect, useMemo, useCallback } from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { saveAs } from 'file-saver'; // Import the file-saver package
import JSZip from 'jszip'; // Import the jszip package

const Galerka = ({ data }) => {
  const { markdownRemark: post } = data;
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(52); // Adjust this value to change the number of images per page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = data.gallery.edges.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(data.gallery.edges.length / imagesPerPage);

  const [downloading, setDownloading] = useState(false);

  const downloadAllImages = () => {
    setDownloading(true);
    const zip = new JSZip();
    
    const fetchAndAddImage = (imageNode, index) => {
      const imageFileName = `image-${index + 1}.jpg`; // Change the file name as needed
      fetch(imageNode.publicURL)
        .then(response => response.blob())
        .then(blob => {
          zip.file(imageFileName, blob);
          if (index === data.gallery.edges.length - 1) {
            zip.generateAsync({ type: "blob" }).then(content => {
              saveAs(content, "fotky-vysocina-2024.zip");
              setDownloading(false); // Reset the downloading state
            });
          }
        });
    };
    
    data.gallery.edges.forEach(({ node }, index) => {
      fetchAndAddImage(node, index);
    });
  };
  

  const downloadImagesOnPage = () => {
    const zip = new JSZip();
    setDownloading(true);
  
    currentImages.forEach(({ node }, index) => {
      const imageFileName = `image-${index + 1}.jpg`; // Change the file name as needed
      fetch(node.publicURL)
        .then(response => response.blob())
        .then(blob => {
          zip.file(imageFileName, blob);
          if (index === currentImages.length - 1) {
            zip.generateAsync({ type: "blob" }).then(content => {
              saveAs(content, "fotky-vysocina-2024.zip");
              setDownloading(false); // Reset the downloading state
            });
          }
        });
    });
  };  

  const options = {
    thumbnails: {
      showThumbnails: false
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../../components/leto-2024/leto2024.png'; // Adjust the path based on your project structure
    link.download = 'leto2024.png';
    link.click();
  };

  const content = useMemo(() => {
    if (!authorized) {
      return (
        <>
          <div className="password">
            <h1>
              K zobrazení fotek zadejte <br></br>prosím <strong>heslo</strong>
            </h1>
            <input
              value={password}
              className="password-input"
              onKeyPress={() => {
                checkpassword();
              }}
              onChange={(e) => {
                setInvalid(false);
                setPassword(e.target.value);
              }}
            ></input>
            <button
              className="password-button"
              type="submit"
              onClick={() => {
                checkpassword();
              }}
            >
              Potvrdit
            </button>
            {invalid && <p className="wrong-password">Nesprávné heslo</p>}
          </div>
        </>
      );
    } else {
      return (
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <div className="fotky-informace"><p>Fotky si nyní můžete hromadně stáhnout kliknutím na tlačítko níže (chvíli trvá, než stahování začne).</p></div>
            <div className="downloads-buttons">
            {downloading ? (
              <div className="loader"></div>
            ) : (
            <>
              <button className="tlacitko-fotky" onClick={downloadImagesOnPage}>Stáhnout fotky z této stránky</button>
              </>
              )}
              </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={index + 1 === currentPage ? "pagination-page active" : "pagination-page"}
                >
                  {index + 1}
                </a>
              ))}
            </div>
            <div className="grid">
              {currentImages.map(({ node }) => (
                <a className="grid-item" href={node.publicURL}>
                  <GatsbyImage
                    className="grid-item"
                    image={node.childImageSharp.gatsbyImageData}
                    alt={node.base.split("-").join(" ").split(".")[0]}
                  />
                </a>
              ))}
            </div>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={index + 1 === currentPage ? "pagination-page active" : "pagination-page"}
                >
                  {index + 1}
                </a>
              ))}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      );
    }
  }, [authorized, password, invalid, currentImages, currentPage, totalPages]);

  const checkpassword = useCallback(() => {
    if (password.toLowerCase() === "vysočina66") {
      setAuthorized(true);
    } else {
      setInvalid(true);
    }
  }, [password]);

  return (
    <Layout>
      <div>{content}</div>
    </Layout>
  );
};

Galerka.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Galerka;

export const pageQuery = graphql`
  query {
    gallery: allFile(
      filter: { relativeDirectory: { eq: "leto-2024" } }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          id
          base
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 200
              width: 300
              transformOptions: { fit: COVER }
              placeholder: BLURRED
              webpOptions: { quality: 80 }
            )
          }
        }
      }
    }
  }
`;
