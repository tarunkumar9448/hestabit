import React, {Component} from 'react';
import banner from '../images/Banner-img.png';
import './header.scss';

class Header extends Component{
render(){
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
                        <div className="text-center banner-text">
                            <h1 className="text-white">Food<br />Delivery Service</h1>
                            <p className="text-white">Be part of Riderkaki and make customer happy with quick delivery</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <img src={banner} alt="banner-img" className="banner-img img-fluid" />
                    </div>
                </div>
            </div>
         </header>
        );
    }
}

export default Header;
