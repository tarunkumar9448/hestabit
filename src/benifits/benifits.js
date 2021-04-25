import React, {Component} from 'react';
import img1 from '../images/High-Potential-Earnings.png';
import img2 from '../images/Flexible-Hours.png';
import img3 from '../images/Attractive-Bonus.png';
import './benifits.scss';

class Benifits extends Component{
  render(){
  return (
        <section className="benifits py-5">
          <div className="container">
              <h2 className="text-center section-heading">Rider Benifits</h2>
              <p className="section-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className="row mt-4">
                <div className="col-md-4 mb-4">
                    <div className="text-center benifits-box">
                        <img src={img1} alt="" className="img-fluid d-block mx-auto" />
                        <h3>High Potential Earnings</h3>
                        <p>Many orders with competitive rates, earn with us easily</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center benifits-box">
                         <img src={img2} alt="" className="img-fluid d-block mx-auto" />
                        <h3>Flexible Hours</h3>
                        <p>Many orders with competitive rates, earn with us easily</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="text-center benifits-box">
                         <img src={img3} alt="" className="img-fluid d-block mx-auto" />
                        <h3>Attractive Bonus & Incentives</h3>
                        <p>Refer or Join for more incentives</p>
                    </div>
                </div>
              </div>
            </div>
        </section>
 );
}
}

export default Benifits;
