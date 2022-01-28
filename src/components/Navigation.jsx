import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <div className="navigation">
            {/* <nav className="navbar navbar-expand navbar-light bg-transparent"> */}
            <nav className="navbar navbar-expand navbar-custom">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="../BwLogo.png" alt="Bandwidth Logo" width="40" height="40" />
                        TAC Lookup Tool
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Num Lookup
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ipLookup">
                                    IP Lookup
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;