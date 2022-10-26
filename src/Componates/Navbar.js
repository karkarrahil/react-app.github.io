import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar1(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.color} text-dark`}>
                <div className="container-fluid ">
                    <Link className="navbar-brand text-secondary" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars text-light "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-dark">
                                <Link className="nav-link active text-secondary" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item text-dark">
                                <Link className="nav-link text-secondary" to="/about">{props.About}</Link>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleDark} />
                                <label className="form-check-label text-secondary" htmlFor="flexSwitchCheckDefault">{`Enable ${props.color === "dark" ? 'light' : 'dark'} mode`}</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefaultN" onClick={props.toggleGreen} />
                                <label className="form-check-label text-secondary" htmlFor="flexSwitchCheckDefaultN">{`Enable ${props.color === "info" ? 'light' : 'info'} mode`}</label>
                            </div>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}


Navbar1.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
    String: PropTypes.string.isRequired,
    Number: PropTypes.number.isRequired
}

// Navbar.defaultProps  ={
//     title: 'Insert title',
//     About: 'Insert description'
// }

