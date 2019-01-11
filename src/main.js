import React, { Component } from 'react';
import './App.css';
import Quagga from 'quagga';

class Main extends Component {

  _onDetected(result) {
    // this.props.onDetected(result);
    console.log(result.codeResult.code)
    document.getElementById('text').innerText = result.codeResult.code
}

  componentDidMount () {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      document.getElementById('text2').innerText = navigator.mediaDevices.getUserMedia
      // safely access `navigator.mediaDevices.getUserMedia`
    }
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment" // or user
      },
        target: document.querySelector('#camera')    // Or '#yourElement' (optional)
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      decoder : {
        readers: ["ean_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });
    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount () {

  }


  render() {
    return (
      <div>
        <div className='barcode-div' id='camera'>
        </div>
        <div id='text'>Hello</div>
        <div id='text2'>Hello</div>
      </div>
    );
  }
}

export default Main;
