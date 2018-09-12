import React from "react";
import { Link } from "gatsby"

import logo from "../static/images/logo/logo.png"
const Header = () => {
    return <header>
            <div className="tw-head">
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <Link to="/" className="navbar-brand tw-nav-brand" style={{ minHeight: "70px" }}>
                        <img src={logo}  style={{ height: "70px" }} alt="Nx Digital" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link">
                                Services
                                <span className="tw-indicator"><i className="fa fa-angle-down" /></span>
                            </a>
                        <ul className="dropdown-menu tw-dropdown-menu">
                            <li>
                                <Link to="/services/website-development/">
                                    Website Developement
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/digital-marketing/">
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/app-dev/">
                                    App Dev
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/outsourced-cmo/">
                                    Outsourced CMO
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/outsourced-cto/">
                                    Outsourced CTO
                                </Link>
                            </li>
                        </ul>
                        </li>              
                        <li className="nav-item d-none">
                            <Link to="/blog/" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/career/" className="nav-link">
                                Career
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about/" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* End Navbar Nav */}
                    </div>
                </nav>
                {/* End of Nav */}
                </div>
                {/* End of Container */}
            </div>
            {/* End tw head */}
        </header>
}

export default Header;
