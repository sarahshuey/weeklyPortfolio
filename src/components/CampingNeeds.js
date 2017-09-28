import React, { Component } from 'react';
import image from '../images/chair.jpg'
import image2 from '../images/sleepingbag.jpg'
import image3 from '../images/tent.jpg'
import { Link } from 'react-router-dom';
// import data from '../data/campingData'


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
      "textDecoration":"none",
      "paddingLeft":"50px"
    }
    return(
      <div className="app-body findus offset col-lg-10 col-lg-offset-1">
        <section className="row" style={style}>
        <h1 className="header" style={{subHeadings}}>Camping</h1>
        <div className="image" style={{ display:"flex", flexDirection:"column", justifyContent:"left"}}>
        <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
        <img style={{width: 250, height: 250, padding:"10px"}} src={image} alt="img"></img>
        <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <p> Chair, to sit while roasting marshmellows </p>
        <p> Price: $19.99</p>
        </div>
        </div>
        <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image2} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Sleeping Bag, because bears are afraid of sharks. And if you are into the water we have a great selection of <Link to="/FishingTackle">fishing</Link> gear too. </p>
          <p> Price: $49.99</p>
          </div>
          </div>
          <div className="about" style={{ display:"flex", flexDirection:"row", justifyContent:"left"}}>
          <img style={{width: 250, height: 250, padding:"10px"}} src={image3} alt="img"/>
          <div className="about" style={{ display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <p> Tent, colorful and useful. Keeps you dry and away from the elements. This tent is top of the line and it is great for both the wilderness or an escape into your backyard. </p>
          <p> Price: $109.99</p>
          </div>
          </div>
          </div>
    </section>
  </div>
    )
  }
}
