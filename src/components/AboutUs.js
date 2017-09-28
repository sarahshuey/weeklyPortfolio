import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {

let otherStyle = {
  "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "height": "50%",
      "padding": "100px",
      "fontFamily": "Arizonia",
      "textAlign":"center"
    }
    let aboutStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "50%",
      "fontFamily": "Arizonia",
      "padding": "100px",
      "textAlign":"center"
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
            <hr/>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
              Welcome to our Store, we are a source for all of your camping needs! We look forward to your business and feel free to <Link to="/ContactUS">contact us</Link>with any questions you may have
            </p>
        </section>
      </div>
    );
  }
}
