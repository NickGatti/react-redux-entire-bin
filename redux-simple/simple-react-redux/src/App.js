import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter } from './redux/actions'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <button
          onClick={() => this.props.increment(this.props.counter)}
        >+</button>
        <button
          onClick={() => this.props.decrement(this.props.counter)}
        >-</button>
        {this.props.counter}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: bindActionCreators(incrementCounter, dispatch),
    decrement: bindActionCreators(decrementCounter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
