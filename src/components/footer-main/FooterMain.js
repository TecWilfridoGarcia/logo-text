import React from 'react';
import './FooterMain.css';
import hour from './../../assets/hora-perfecta.png';
import send from './../../assets/avion.png';
import cast from './../../assets/pagos.png';
import change from './../../assets/cambio.png';

class FooterMain extends React.Component {
  render(){
    return(
      <div className="footer-red-container">
        <div className="footer-red-dark">
          <div className="footer-red-dark__inner">
            <div className="row">
              <div className="col-sm-3"><img  src={hour} className="img-footer"/> <p className="text-left benefits">MI HORMA PERFECTA</p></div>
              <div className="col-sm-3"><img  src={send} className="img-footer"/><p className="text-left benefits">ENVIOS A TODO EL PAIS</p></div>
              <div className="col-sm-3"><img  src={cast} className="img-footer"/> <p className="text-left benefits">METODOS DE PAGOS</p></div>
              <div className="col-sm-3"><img  src={change} className="img-footer"/> <p className="text-left benefits">DEVOLUCIONES FACILES </p></div>
            </div>
          </div>
        </div>
        <div className="footer-red-light">
          <div className="footer-red-light__inner">
          <div className="row">
              <div className="col align-self-center red-container">
              <h6 className="text-light float-left">SUSCRÍBETE A NUESTRO NEWSLETTER</h6>
              </div>
            </div>
          <div className="row">
              <div className="col">
              <input type="text" placeholder="tucorreo@mail.com"  className="float-left mail" /><i className="material-icons">send</i><br/>
             <span  className="text-light float-left" >Al ingresar mi correo acepto los términos y condiciones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterMain;