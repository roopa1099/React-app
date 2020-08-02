import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

export default class About extends Component {
   
  render() {
    const mystyle1 = {
        backgroundImage: "url(" + "https://images.pexels.com/photos/1858406/pexels-photo-1858406.jpeg?cs=srgb&dl=pexels-athena-1858406.jpg&fm=jpg" + ")",
    };
    return (
      <div style={mystyle1}>
       <h1 style={{color:"#7F1C0A ",fontFamily: "Brush Script MT"}}> ABOUT PAGE </h1>
       <Component1 />
       <Component2 />
       <Component3 />
      </div>
    );
  }
}