import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

function Navbar(props) {

  return (
      <div>
          <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-dark`}>
              <div className="container-fluid">
                  <Link className={`navbar-brand text-${props.mode==='light'?'black':'white'}`} to="/">{props.title}</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link to="/"  className={`nav-link active text-${props.mode==='light'?'black':'white'}`} aria-current="page">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to ="/about" className={`nav-link text-${props.mode==='light'?'black':'white'}`}>{props.abouttext}</Link>
                         </li> 


                      </ul>
                      <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">change mode</label>
                            </div>
                      </form>
                  </div>
              </div>
          </nav>

      </div>
  )
}


export default Navbar

Navbar.propTypes={title:PropTypes.string,
    abouttext:PropTypes.string}

Navbar.defaultProps = {
    title:'title',
    abouttext:"About"
}