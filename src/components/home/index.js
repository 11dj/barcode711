import React, { Component } from 'react';
import './App.css';

import ComponentA from './ComA'
import Scanner from './scanner';
class MainComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 'zzddd'
    }
  }

  componentDidMount () {
    this.props.scanner(this.state.id)
  }


  render() {
    return (
      <div className="App">
          Hello
          <ComponentA />
          <Scanner id={this.state.id} />
      </div>
    );
  }
}

export default MainComponent;
