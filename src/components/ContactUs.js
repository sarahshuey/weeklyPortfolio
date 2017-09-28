import React, { Component } from 'react';
import '../styles/App.css';

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
    let contactStyle = {
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
        <section className="row" style={contactStyle}>
            <hr/>
            <h2 style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
             Camping needs
             </h2>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
              Email: project@gmail.com
            </p>
            <p style={{color:"#0d0056", textAlign:"center"}} className="primary-text">
              Phone: 512-222-2222
            </p>
        </section>
      </div>
    );
  }
}
