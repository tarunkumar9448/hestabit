import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './nav/nav';
import Header from './header/header';
import Service from './service/service';
import Work from './work/work';
import Benifits from './benifits/benifits';
import Register from './register/register';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Service />
    <Work />
    <Benifits />
    <Register />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
