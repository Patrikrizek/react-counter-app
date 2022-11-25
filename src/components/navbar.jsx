import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;