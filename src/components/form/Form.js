import React from 'react'
import './Form.css';
import Sujeto from '../../assets/sujeto1.jpg';

class Form extends React.Component {
  
    render(){
        return(
            <div>
                <div className="row form-group">
                    <div className="col-sm"> 
                    <h6 className="text-left">LOREM IPSUM DOLOR SIT </h6>   
                        <form onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" className="form-item w-100" placeholder="Name" name="name" value={this.name} onChange={ this.onChange }/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-item w-100"placeholder="Email" name="email" value={this.email} onChange={ this.onChange } />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-item w-100"placeholder="Phone" name="phone" value={this.phone} onChange={ this.onChange } />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-item w-100"placeholder="Age" name="age" value={this.age} onChange={ this.onChange } />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-item w-100" placeholder="Address" name="address" value={this.address} onChange={ this.onChange } />   
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-12">
                            <textarea className="form-msg w-100"placeholder="Message" name="message" value={this.message} onChange={ this.onChange }></textarea>
                                <button  type="submit" className="float-right btn-custom">ENVIAR</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm">
                        <img src={Sujeto} className="img-form w-100" />
                        </div>    
                </div>


            </div>
        );
    }
}
export default Form;