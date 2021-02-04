import '../railscasts.css';
import Highlight from 'react-highlight.js';
import React, { Component } from 'react';
import shuffle from "../input/api.js";
import { range1 } from "../utils/utils.js";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Text extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
      len: 10
    };
    this.clickButton = this.clickButton.bind(this);
    this.handleParamChanged = this.handleParamChanged.bind(this);
  }

  handleParamChanged(event) {
    console.log("tiriri ");
    this.setState({ len: event.target.value });
  }

  clickButton(e) {
    e.preventDefault();
    shuffle("/random/string?len=" + this.state.len, (data) => {
      console.log(data)
      this.setState({ text: data })
    });
  }

  render() {
    return (
      <div style={{float:'left'}}>
        <div>
        <Button variant="contained" color="primary" onClick={this.clickButton}>Generate String</Button>
        </div>
        <div>
        lenght <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.handleParamChanged}
          value={this.state.len}
        >
          {range1(20).map((value) => (
            <MenuItem value={value}>{value}</MenuItem>
          ))}
        </Select>
        </div>
        <div>
          {this.state.text}
        </div>
        <Highlight language="bash">
          {"curl 'https://api-utils.herokuapp.com/random/uuid?len=" + this.state.len + "' -H 'Accept: text/plain'"}
        </Highlight>
      </div>
    );
  }
}

export default Text;
