import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand href="/">Cherie's Angels</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/roster">
                                    Roster
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/events">
                                    Events
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/apply">
                                    Apply
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;
