import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from "reactstrap";
import './LocationMobile.css';
export default class LocationMobile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleSearch() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
              <Navbar color="item" light expand="md">
                <NavbarToggler onClick={this.toggle}  className="icon-locations" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="float-left" >
                    <ul>
                      <li>
                      <i className="material-icons">
                            person_pin_circle
                            </i>
                            <p className="navbar-options">Tiendas</p>
                      </li>
                      <li>
                      <i className="material-icons">
                          favorite_border
                          </i>
                          <p  className="navbar-options">Lista de deseos</p>
                      </li>
                      <li>
                      <i className="material-icons">
                          shopping_basket
                          </i>
                          <p  className="navbar-options">Mi bolsas</p>
                      </li>
                    </ul>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
      </div>
    );
  }
}
