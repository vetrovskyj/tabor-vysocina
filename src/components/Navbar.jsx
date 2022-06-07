import React from 'react'

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
          <div className="nazev">
            <a className="home" href="/">
              <div className="radky">
                <h1 className="vysocina">Vysočina</h1>
                <h2 className="turnus">3. turnus</h2>
              </div>
            </a>
          </div>
          <nav>
            <ul className="menu">
              <li><a className="link" id="odsazeni" href="/informace/">Informace</a></li>
              <li><a className="link" href="/aktuality/">Aktuality</a></li>
              <li><a className="link" href="/galerie/">Galerie</a></li>
              <li><a className="link" href="/kontakt/">Kontakt</a></li>
            </ul>
          </nav>
          <div className="logo">
            <a className="nadpis" href="/">
              <img src="../../img/logo.png" alt="Vysočina logo" />
            </a>
          </div>
        </header>
      </>
    )
  }
}

export default Navbar
