import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    return (
        <React.Fragment>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                        <span className="badge badge-pill badge-secondary m-2">
                            {totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;