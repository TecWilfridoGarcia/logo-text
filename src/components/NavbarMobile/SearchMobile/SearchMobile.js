import React from "react";
import './SearchMobile.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from "reactstrap";

export default class SearchMobile extends React.Component {
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
                <NavbarToggler onClick={this.toggleSearch}  className="icon-search" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem />
                    <input type="text" className="search" placeholder="¿Que estas buscando?" />
                      <i className="material-icons search">search</i>
                    <NavItem />
                  </Nav>
                </Collapse>
              </Navbar>
      </div>
    );
  }
}
