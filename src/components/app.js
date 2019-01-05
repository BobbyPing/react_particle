import React, { Component } from 'react';
import Particles from 'react-particles-js';


const particleOpt = {
                particles: {
                  number: {
                    value: 150,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  }

                }
              } 

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React Background Test</h1>
        <h2>React Bootstrap</h2>
        <Particles 
                params={particleOpt}
                />
      </div>
    );
  }
}

