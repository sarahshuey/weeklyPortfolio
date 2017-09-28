import React, { Component } from 'react';
import '../styles/App.css';
import image from '../images/campingneeds.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image" style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
          <h2>Welcome to Camping Needs</h2>
        </div>
        <img style={{width: 250, height: 250, padding:"10px"}} src={image} alt="img"></img>
      </div>
    );
  }
}

export default App;
