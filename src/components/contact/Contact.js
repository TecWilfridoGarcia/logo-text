import React from 'react';
import './Contact.css';
import facebook from '../../assets/facebook.png';
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-sm-3">
           
            <ul>
            <li className="float-left list-item">
              <h5 className="float-left">LINKS DE INTERÉS</h5>
              </li>
                <li className="float-left list-item"><a>¿QUIÉNES SOMOS?</a></li>
                <li className="float-left list-item"><a>TÉRMINOS Y CONDICIONES</a></li>
                <li className="float-left list-item"><a>POLÍTICA DE PRIVACIDAD</a></li>
                <li className="float-left list-item"><a>PREGUNTAS FRECUENTES</a></li>
            </ul>
         </div>
         <div className="col-sm-3">
            
            <ul>
                <li  className="float-left list-item">
                  <h5 className="float-left">SERVICIO AL CLIENTE</h5>
                </li>
                <li  className="float-left list-item"><a>WHATSAPP +57 300 123 4567</a></li>
                <li  className="float-left list-item"><a>TEL. +57 123 4567</a></li>
                <li  className="float-left list-item"><a>CONTACTO@MARCA.COM</a></li>
                <li  className="float-left list-item"><a>CONTÁCTANOS</a></li>

            </ul>
        
         </div>
         <div className="col-sm-3">
             <h5 className="float-left">ENCUENTRA TU TIENDA</h5>
                <input type="text" placeholder="Ciudad" className="send float-left" />
                <i className="material-icons">location_on</i>
         </div>
         <div className="col-sm-3">
             <ul>
                <li className="list-item">
                  <h5 className="">SIGUENOS</h5>
                </li>
                <li className="list-item"> <img src={facebook} className="social-icon" /> <a>NombreMarca</a> </li>
                <li className="list-item"> <img src={youtube} className="social-icon" /> <a>NombreMarca</a> </li>
                <li className="list-item"> <img src={instagram} className="social-icon" /> <a>NombreMarca</a> </li>
            </ul>
         </div>
        </div>
        <hr/>
      </div>
    );
  }
}
export default Contact;