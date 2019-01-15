import React, { Component } from 'react';
import './App.css';

export default class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  sorted =() => {
    this.setState({ list: this.state.list.reverse(), sorted: !this.state.sorted })
  }

  render() {
    return (
      <div id="interactive" className="viewport">
        <video autoPlay={true} preload="auto" src="" muted={true} playsInline={true}></video>
        <canvas  className="drawingBuffer"></canvas>
      </div>
    );
  }
}
