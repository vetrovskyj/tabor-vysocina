import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="topandbottom">
          <div className="topandbottom-text">Copyright &copy;<a href="https://www.linkedin.com/in/jan-vetrovsky/" target="_blank" rel="noreferrer">Jan Větrovský</a> 2021</div>
          <a href="https://www.facebook.com/O%C4%8Dn%C3%AD-optika-Volyn%C4%9B-191635897936682/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i>Náš Facebook</a>
        </div>
      </footer>
    )
  }
}

export default Footer
