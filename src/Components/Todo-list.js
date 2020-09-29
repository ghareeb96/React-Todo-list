import React, { Component } from 'react'
import "./Todo-list.css"
import Todo from "./Todo"

export class Todolist extends Component {
    state = {
        inputText: "",
        todos: []
    }

    addTodo = () => {
        this.setState((prev) => ({
            todos: [...prev.todos,
            {
                task: this.state.inputText,
                completed: false
            }],
            inputText: ""
        }))
    }


    handleInput = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    render() {
        return (
            <div className="todo-list">
                < div className="todo-list-header" >

                    <div className="input-bar">
                        <input
                            value={this.state.inputText}
                            type="text"
                            onChange={this.handleInput}
                            id="todo-input"
                            placeholder="Enter a Todo" />

                        <button
                            className="add-btn"
                            onClick={this.addTodo}>
                            <i className="far fa-plus-square"></i>
                        </button>
                    </div>

                    <div className="filter-bar">
                        <select name="filter" id="filter">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incompleted">Incompleted</option>
                        </select>
                    </div>
                </div >

                <div className="todos">
                    {this.state.todos.map((newTodo) => (
                        <Todo task={newTodo.task} />
                    ))}


                </div>
            </div>
        )
    }
}

export default Todolist


