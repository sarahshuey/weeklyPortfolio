import React, { Component } from 'react';
import image from '../images/chair.jpg'
import image2 from '../images/sleepingbag.jpg'
import image3 from '../images/tent.jpg'

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
        <p> Chair, to sit while roasting marshmellows </p>
        <p> Price: $19.99</p>
        </div>
        </div>
        <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image2} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Sleeping Bag, because bears are afraid of sharks </p>
          <p> Price: $49.99</p>
          </div>
          </div>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image3} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Tent, colorful and useful. Keeps you dry and away from the elements </p>
          <p> Price: $109.99</p>
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
