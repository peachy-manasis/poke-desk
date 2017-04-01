import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };

    this.loadPokemon = this.loadPokemon.bind(this);
  }
  loadPokemon(url) {
    fetch(url)
    .then(response => {
      return response.json();
    }).then(json => {
      console.log(json)
      this.setState({
        pokemon: json.results
      })
      console.log(this.state)
    }).catch(error => {
      console.log(error)
    })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
