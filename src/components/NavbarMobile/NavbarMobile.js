import React from "react";
import logo from "../../assets/logotext.png";
import "./NavbarMobile.css";
import MenuMobile from "./MenuMobile/MenuMobile";
import Search from "./SearchMobile/SearchMobile";
import LocationMobile from "./LocationsMobile/LocationMobile";
import StoreMobile from "./StoreMobile/StoreMobile";

export default class NavbarMobile extends React.Component {

  render() {
    return (
      <div className="container hidden-md-up">
          <div className="row">
            <div className="col">
                <div className="col-menu">
                 <MenuMobile/> 
                </div>
            </div>
            <div className="col">
                <div className="col-search">
                 <Search/>
                </div>
              
            </div>
            <div className="col">
              <div>
                <img className="float-center logo-mobile" src={logo} />
              </div>
              <h3 className="title-mobile">LOGO TEXT</h3>
            </div>
            <div className="col">
            <LocationMobile/>
            </div>
            <div className="col">
             <StoreMobile />
            </div>
          </div>
      </div>
    );
  }
}
