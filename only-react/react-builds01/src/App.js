import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import ShoppingCart from './components/ShoppingCart'
import AddItem from './components/AddItem'

class App extends Component {
  state = {
    items: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ShoppingCart items={this.state.items}/>
        <AddItem />
        <Footer year="2018"/>
      </div>
    );
  }
}

export default App;
