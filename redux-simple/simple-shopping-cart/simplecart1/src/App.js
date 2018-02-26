import React, { Component } from 'react';
import './App.css';
import HeadComponent from './components/HeadComponent';
import FooterComponent from './components/FooterComponent';
import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadComponent />
        <ItemList />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
