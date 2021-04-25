import React, {Component} from 'react';
import logo from '../images/logo.png';
import fb from '../images/fb.png';
import tw from '../images/tw.png';
import ig from '../images/ig.png';
import yt from '../images/yt.png';
import './footer.scss';

class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-4">
                            <img src={logo} alt="logo" className="footer-logo" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <ul className="list-unstyled">
                                <li><h4 className="text-white">Quick Link</h4></li>
                                <li><a className="text-white d-block mb-2" href="#">About Us</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Career</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Contact</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <ul className="list-unstyled">
                                <li><h4 className="text-white">Product Link</h4></li>
                                <li><a className="text-white d-block mb-2" href="#">Driver</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Deliver</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Business</a></li>
                                <li><a className="text-white d-block mb-2" href="#">Help</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-unstyled">
                                <li><h4 className="text-white mb-4">Subscribe Newsletter</h4></li>
                                <li>
                                    <form className="footer-form d-flex align-items-center mb-4">
                                        <div>
                                            <input type="text" placeholder="Your Email Address" />
                                        </div>
                                        <button className="btn text-white">Subscribe</button>
                                    </form>
                                </li>
                                <li className="d-flex align-items-center">
                                    <a href="#" className="d-block mr-2"><img src={fb} alt="logo" className="img-fluid" /></a>
                                    <a href="#" className="d-block mr-2"><img src={tw} alt="logo" className="img-fluid" /></a>
                                    <a href="#" className="d-block mr-2"><img src={ig} alt="logo" className="img-fluid" /></a>
                                    <a href="#" className="d-block mr-2"><img src={yt} alt="logo" className="img-fluid" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center text-white small">@ Riderkaki 2020. All Rights Reserved</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
