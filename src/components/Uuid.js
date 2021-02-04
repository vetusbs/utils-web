import '../railscasts.css';
import Highlight from 'react-highlight.js';
import React, { Component } from 'react';
import shuffle from "../input/api.js";

class UUID extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
    };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {   
    e.preventDefault();     
    shuffle("/random/uuid", (data) => {
      console.log(data)
      this.setState({ text: data })
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickButton}>Generate UUID</button>
        <div>
          {this.state.text}
        </div>
        <Highlight language="bash">
          curl 'https://api-utils.herokuapp.com/random/uuid' -H 'Accept: text/plain'
        </Highlight>
      </div>
    );
  }
}

export default UUID;
