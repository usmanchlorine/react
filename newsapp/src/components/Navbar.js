import React from 'react'
import './componentscss/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const title_style={
    fontFamily:'Fasthand',
    fontSize:'20px'
  }
 
  

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={title_style}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business" >business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">science</Link>
        </li>
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2 bg-dark" data-bs-theme='dark' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
