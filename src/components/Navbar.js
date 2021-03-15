import React from 'react'


const header = document.querySelector('.logo-and-nav-container');

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <>
        <header>
          <div className="topandbottom">
            <p><i className="fa fa-home" />nám. Svobody 14, Volyně, 149 00</p>
            <div className="contact">
              <a href="mailto:vetrovsky.jan@gmail.com"><i className="fa fa-envelope" />optikavolyne@seznam.cz</a>
              <a href="tel:+420773201372"><i className="fa fa-phone" />+420604802888</a>
            </div>
          </div>
        </header>
        <div className="logo-and-nav-container">
          <div className="logo-and-nav">
            <span className="logo"><a href="./">Optika Volyně</a></span>
            <nav>
              <ul>
                <li>
                  <a href="./sluzby/">Produkty a služby</a>
                </li>
                <li>
                  <a href="./kontakt/">Kontakt</a>
                </li>
              </ul>
              <div className="hamburger">
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </div>
            </nav>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar
