import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
