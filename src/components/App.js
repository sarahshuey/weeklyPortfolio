import React, { Component } from 'react';
import '../styles/App.css';
import image from '../images/campingneeds.jpg'

class App extends Component {
  render() {
    let aboutStyle = {
      "backgroundColor": "#bce9f4",
      "backgroundSize": "cover",
      "backgroundPosition": "top",
      "height": "50%",
      "fontFamily": "Arizonia",
      "padding": "50px",
      "textAlign":"center"
    }
    let imgStyle={
      "backgroundImage":"image",
      "backgroundSize": "cover",
    }
    return (
      <div className="App" style={aboutStyle}>
        <div className="image" style={imgStyle}>
          <h2>Welcome to Camping Needs</h2>
        </div>
        <img style={{width: 800, height: 750, padding:"10px", backgroundColor:"#bce9f4"}} src={image} alt="img"></img>
      </div>
    );
  }
}

export default App;
