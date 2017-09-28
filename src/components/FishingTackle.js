import React, { Component } from 'react';
import image from '../images/fishingbait.jpg'
import image2 from '../images/tacklebox.jpg'
import image3 from '../images/fishingrod.png'
import { Link } from 'react-router-dom';


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
        <h1 className="header" style={{subHeadings}}>Fishing</h1>
        <div className="image" style={{ display:"flex", flexDirection:"column", justifyContent:"left"}}>
        <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
        <img style={{width: 250, height: 250, padding:"10px"}} src={image} alt="img"></img>
        <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <p> Bait, you wont catch a fish without this! </p>
        <p> Price: $9.99</p>
        </div>
        </div>
        <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image2} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Tackle Box, place to store your bait </p>
          <p> Price: $39.99</p>
          </div>
          </div>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image3} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Fishing Rod, a place for the bait and fish to come together </p>
          <p> Price: $99.99</p>
          </div>
          </div>
          </div>
    </section>
  </div>
    )
  }
}
