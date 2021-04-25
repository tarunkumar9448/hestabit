import React, {Component} from 'react';
import img1 from '../images/Quick-Delivery.png';
import img2 from '../images/Quality-Delivery.png';
import img3 from '../images/Customer-Satisfaction.png';
import './service.scss';



class Service extends Component{
  render(){
  return (
        <section className="service py-5">
          <div className="container">
              <h2 className="text-center section-heading">Our Services</h2>
              <p className="section-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="row align-items-end mt-4">
                <div className="col-md-4 mb-4">
                    <div className="text-center service-box mx-auto">
                        <img src={img1} alt="" className="img-fluid d-block mx-auto" />
                        <h3>Quick Delivery</h3>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center service-box mx-auto">
                        <img src={img2} alt="" className="img-fluid d-block mx-auto" />
                        <h3>Quality Delivery</h3>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center service-box mx-auto">
                        <img src={img3} alt="" className="img-fluid d-block mx-auto" />
                        <h3>Customer Satisfaction</h3>
                    </div>
                </div>
              </div>
            </div>
        </section>
 );
}
}

export default Service;
