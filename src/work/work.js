import React, {Component} from 'react';
import img1 from '../images/delivery-icon.png';
import img2 from '../images/google.png';
import img3 from '../images/ios.png';
import img4 from '../images/work.png';
import './work.scss';





class Work extends Component{
  render(){
  return (
        <section className="work py-5">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="text-center section-heading text-white">How does it work?</h2>
                    <p className="section-text text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet,</p>
                    <div className="text-left my-4">
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center">
                                <img src={img1} alt="" className="img-fluid d-block icon mr-3" />
                                <p className="text-white">Easy to use, simply go online to start sending orders</p>
                            </li>
                            <li className="d-flex align-items-center">
                                <img src={img1} alt="" className="img-fluid d-block icon mr-3" />
                                <p className="text-white">Food delivery: apply for schedule, send ad-hoc orders, receive notification for orders.</p>
                            </li>
                            <li className="d-flex align-items-center mb-4">
                                <img src={img1} alt="" className="img-fluid d-block icon mr-3" />
                                <p className="text-white">Easy access to task history and rewards</p>
                            </li>
                            <li className="d-flex align-items-center">
                                <a href="#" className="d-block mr-3"><img src={img2} alt="" className="img-fluid d-block" /></a>
                                <a href="#" className="d-block"><img src={img3} alt="" className="img-fluid d-block" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={img4} alt="" className="img-fluid d-block mx-auto" />
                </div>
                </div>
              </div>
        </section>
 );
}
}

export default Work;

