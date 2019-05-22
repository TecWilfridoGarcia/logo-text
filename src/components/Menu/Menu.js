import React from 'react';
import './Menu.css';


export default class Menu extends React.Component {
  render() {
    return (
      <div className="hidden-sm-down">
<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link" href="#">JEAN</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">DENIM</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">ROPA</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">ACCESORIOS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">BASICOS INFALTABLES</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">NOVEDADES</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">REBAJAS</a>
  </li>
</ul>
      </div>
    );
  }
}