import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import ComponentWrapper from './components/ComponentWrapper';
import axios from 'axios'

class App extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    let result = await axios.get('http://localhost:8000/posts')
    this.setState( {
      posts: result.data
      } )
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <ComponentWrapper posts={ this.state.posts } />
      </div>
    );
  }
}

export default App;
