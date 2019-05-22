import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from "reactstrap";

export default class StoreMobile extends React.Component {
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
                <NavbarToggler onClick={this.toggle} className="icon-store" />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem />
                    <NavItem />
                  </Nav>
                </Collapse>
              </Navbar>
      </div>
    );
  }
}
