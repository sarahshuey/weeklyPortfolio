import React, { Component } from 'react';
import image from '../images/hikingpack.jpg'
import image2 from '../images/hikingboots.jpg'
import image3 from '../images/walkingstick.jpg'

export default class Portfolio extends Component {
  render(){
    let style = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "50px"
    }
    let subHeadings = {
      "color": '#0d0056',
      "textAlign":"center",
      "textDecoration":"none"
    }
    return(
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
          <section className="row" style={style}>
          <div className="image" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image} alt="img"></img>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Pack, colorful and useful. Allows you to pack all of the necessities and remain fashionable </p>
          <p> Price: $89.99</p>
          </div>
          </div>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image2} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Boots, boring and ugly. Yet keeps you feet dry and out of harms way, also very comfortable. </p>
          <p> Price: $69.99</p>
          </div>
          </div>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image3} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Walkig Stick, simple and practicle, helps you manuver steep hills and feel safe while you do it. </p>
          <p> Price: $24.99</p>
          </div>
          </div>
          </div>
          <div className="col-lg-8 map">
            <a href="/" style={subHeadings}><p className="primary-text">Sarah Shuey Austin Tx</p></a>
          </div>
    </section>
  </div>
    )
  }
}
