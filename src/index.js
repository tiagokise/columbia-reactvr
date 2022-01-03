import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Texture } from 'aframe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img id="skyTexture" src="https://i.ibb.co/sjRyWBb/fundo-da-paisagem-da-natureza-alt.jpg" alt="fundo-da-paisagem-da-natureza-alt" border="0"></img>
          <img id="logoEureka" src="https://i.ibb.co/jfGWfYk/icone-curtida.png" alt="icone-curtida" border="0" />        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" color="#999999" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000, color: '#FF0d00'}}/>
        <Entity 
          color='#000000'
          material={{color: '#000000', opacity: 0.8}}
          geometry={{primitive: 'plane', width: 1.5 }}
          text={{
            value: 'Bem-vindo\na equipe\nColumbia', 
            align: 'center', 
            width: '3.5', 
            lineHeight: '60'
          }}
          position={{x: 0, y: 2, z: -3}}

        />
        <Entity 
          id="box"
          geometry={{primitive: 'plane', width: 1.5, height: 0.5 }}
          material={{color: '#000000', opacity: 0.8}}
          position={{x: 0, y: 1.2, z: -3}}
        />
        <Entity 
          id="logo"
          geometry={{primitive: 'plane', width: 1, height: 0.3}}
          material={{src: "https://i.ibb.co/VYxd8yw/logowhite.png", transparent: true}}
          position={{x: 0, y: 1.2, z: -3}}
        />
        <Entity id="users"
          rotation="0 -45 0"
          geometry={{primitive: 'plane', width: 3, height: 2.1}}
          material={{color: '#000000', opacity: 0.8}}
          position={{x: 2.2, y: 1.75, z: -3}}
        />
        <Entity 
          id="userTitle"
          rotation="0 -45 0"
          geometry={{primitive: 'plane'}}
          material={{color: '#000000', opacity: 0}}
          position={{x: 2.2, y: 2.6, z: -3}}
          text={{value: 'Integrantes', align: 'center', width: 4, baseline: 'top' }}
        />
        <Entity id="user1"
          rotation="0 -45 0"
          geometry={{primitive: 'plane', width: 0.9, height: 1.5}}
          material={{color: '#000000', opacity: 0}}
          position={{x: 1.6, y: 2.2, z: -3}}
          text={{value: 'Tiago', align: 'center', width: '4' }}
        >
          <Entity 
            id="tiago"
            geometry={{primitive: 'plane', width: 0.8, height: 0.8}}
            material={{src: "https://i.ibb.co/V3Sw8dd/joice.png", transparent: true}}
            position={{x: 0, y: -0.55, z: 0}}
          />
          <Entity 
            color='#000000'
            material={{color: '#000000', opacity: 0}}
            geometry={{primitive: 'plane', width: 0.6, height: 0.5}}
            text={{value: 'Tech Lead', align: 'center', width: 2 }}
            position={{x: 0, y: -1.1, z: 0}}
          />
        </Entity>
        <Entity id="user1"
          rotation="0 -45 0"
          geometry={{primitive: 'plane', width: 0.9, height: 1.5}}
          material={{color: '#000000', opacity: 0}}
          position={{x: 1.6, y: 2.2, z: -1}}
          text={{value: 'Joice', align: 'center', width: '4' }}
        >
          <Entity 
            id="joice"
            geometry={{primitive: 'plane', width: 0.8, height: 0.8}}
            material={{src: "https://i.ibb.co/V3Sw8dd/joice.png", transparent: true}}
            position={{x: 0, y: -0.55, z: 0}}
          />
          <Entity 
            color='#000000'
            material={{color: '#000000', opacity: 0}}
            geometry={{primitive: 'plane', width: 0.6, height: 0.5}}
            text={{value: 'Frontend Developer', align: 'center', width: 2 }}
            position={{x: 0, y: -1.1, z: 0}}
          />
          
        </Entity>
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
