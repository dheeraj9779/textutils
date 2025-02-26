import React from 'react'
import PropTypes from 'prop-types'
import ColorPallete from './ColorPallete'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg"  style={{backgroundColor: `${props.mode === '#FFFFFF' ? "#efefef" : '#000000'}`}}>
        <div className="container-fluid">
          <Link className="navbar-brand"  style={{color: `${props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF'}`}} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link"  style={{color: `${props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF'}`}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  style={{color: `${props.mode === '#FFFFFF' ? '#000000' : '#FFFFFF'}`}} to="/about">About</Link>
              </li>
            </ul> 
            <ColorPallete selector={props}/>
          </div>
        </div>
      </nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title : "Give title here"
}