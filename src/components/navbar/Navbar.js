import React from 'react';
import logo from '../../assets/logotext.png';
import './Navbar.css';
import Menu from '../Menu/Menu';


 class Navbar extends React.Component {
    render(){
        return (
            <div>              
              <header>  
                <nav>
                  <div className="float-left bar-vertical-black">
                  </div>
                  <div className="float-left bar-vertical-grey">
                  </div>
                  <div className="row">
                    <div className="col-sm-4 ">
                      <input type="text" className="search" placeholder="¿Que estas buscando?" />
                      <i className="material-icons search">search</i>
                    </div>
                    <div className="col-sm-4 float-center ">
                      <img className="logo" src={logo} />
                      <h3 className="title">LOGO TEXT</h3>
                    </div>
                    <div className="col-sm-4">
                      <div className="row">
                        <div className="col">
                          <div className="menu-bar">  
                    </div>
                        </div>
                      </div>
                    
                      <div className="row pt-3">
                        
                        <div className="col-3">
                          <i className="float-left material-icons ">
                            person_pin_circle
                            </i>
                            <p className="navbar-options">Tiendas</p></div>

                        <div className="col-5">
                          <i className="material-icons">
                          favorite_border
                          </i>
                          <p  className="navbar-options">Lista de deseos</p></div>
                        <div className="col-4">
                          <i className="material-icons">
                          shopping_basket
                          </i>
                          <p  className="navbar-options">Mi bolsas</p></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header> 
              <Menu/>
            </div>
        );
    }
}
export default Navbar;