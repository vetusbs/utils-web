import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: "",
    };
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle(e) {    
    e.preventDefault();    
    fetch('https://api-utils.herokuapp.com/random/string')
    .then(res => res.text())
    .then((data) => {
      console.log(data)
      this.setState({ text: data })
    })
    .catch(console.log)
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <button onClick={this.shuffle}>RANDOM STRING</button>
        <div>
            {this.state.text}
        </div>
      </header>
    </div>
    );
  }
}

export default App;
