import React from "react";
import pasarela from "../../assets/pasarela.png";
import "./Payments.css";

class Payments extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2">
            <span>Medios de pagos</span>
          </div>
          <div className="col-sm-4">
            <img src={pasarela} className="pasarela" />
          </div>
          <div className="col-sm-6">
            <span >
              Todos los derechos reservados Nombre Marca 2019 | Empowered by{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Payments;
