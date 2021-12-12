import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function header() {
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">

  <Link className="navbar-brand" to="#">
      <img src="logo.png" alt="" width="70" height="30" className="d-inline-block align-text-top"/>
      
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/products' className="nav-link">products</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to='#' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            amazon services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='' className="dropdown-item" >amazon prime</Link></li>
            <li><Link to='' className="dropdown-item" >amazon store</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to='' className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link" >login/signup</Link>
        </li>
        
      </ul>
      
    </div>

    <button type="button" className="btn btn-dark"><Link to='/checkout' id='cartbtn'>cart(3)</Link></button>
  </div>
</nav>
    )
}
                    