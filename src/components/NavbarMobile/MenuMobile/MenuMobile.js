import React from "react";
import './MenuMobile.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem,NavLink} from "reactstrap";

export default class MenuMobile extends React.Component {
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
      <div>
                  <Navbar color="menu" light expand="md">
                <NavbarToggler onClick={this.toggle} className="icon-menu float-left" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem />
                    <NavItem>
                <NavLink className="item" href="/components/">JEAN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">DENIM</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">ROPA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">ACCESORIOS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">BASICOS INFALTABLES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">NOVEDADES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">REBAJAS</NavLink>
              </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>  
                </div>
    );
  }
}
