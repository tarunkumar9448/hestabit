import React, {Component} from 'react';
import img from '../images/Register.png';
import './register.scss';

class Register extends Component{
    render(){
        return (
            <section className="register py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center mb-4">
                            <h2 className="text-center section-heading mb-4">Register Now<br /> to become a RiderKakia</h2>
                            <a href="#" className="btn btn-outline-dark">Register</a>
                        </div>
                        <div className="col-md-6">
                            <img src={img} alt="" className="img-fluid d-block mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;
