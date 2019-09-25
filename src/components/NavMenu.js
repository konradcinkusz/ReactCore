import React from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              ReactCore App (click: Deafult)
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={this.state.isOpen}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/ValidateInputTextExample"
                  >
                    ValidateInputTextExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/ValidateTextInputExample"
                  >
                    ValidateTextInputExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/ContainerExample"
                  >
                    ContainerExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/CirclesItemsExample"
                  >
                    CirclesItemsExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/CirclesItemsVerticalExample"
                  >
                    CirclesItemsVerticalExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={Link}
                    className="text-dark"
                    to="/examples/CirclesItemsCounterExample"
                  >
                    CirclesItemsCounterExample
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">
                    Deafult
                  </NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
