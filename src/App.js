import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Joke from "./components/Joke";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      joke: {}
    }
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount() {
    this.setState({
      joke: {}
    });
    this.fetchJoke();
  }

  fetchJoke() {
    axios.get("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke").then(res => {
      this.setState({
        joke: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Joke setup={this.state.joke.setup} 
          punchline={this.state.joke.punchline} 
          fetchJoke={this.fetchJoke}/>
      </div>
    );
  }
}

export default App;
