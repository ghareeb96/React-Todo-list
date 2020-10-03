import React, { Component } from 'react'
import TodoList from "./Components/Todo-list"
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo-List</h1>
        </div>
        <TodoList />
      </div>
    )
  }
}

export default App