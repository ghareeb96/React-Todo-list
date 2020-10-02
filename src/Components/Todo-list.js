import React, { Component } from 'react'
import "./Todo-list.css"
import Todo from "./Todo"

export class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            todos: [],
            filteredTodos: []
        }


    }


    handleInput = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }


    addTodo = () => {
        if (this.state.inputText) {
            this.setState((prev) => ({
                todos: [...prev.todos,
                {
                    task: this.state.inputText,
                    completed: false,
                    id: Math.random() * 100
                }],
                inputText: ""
            }))

        }
    }

    completeHandler = (id) => {
        this.setState({
            todos:
                this.state.todos.map((item) => {
                    if (item.id === id) {
                        // console.log(item)
                        return {
                            ...item, completed: !item.completed
                        }
                    }
                    console.log(item)
                    return item
                })
        })

    }
    deleteHandler = (id) => {
        this.setState({
            todos:
                this.state.todos.filter((item) => item.id !== id)
        })
    }

    filterTodo = () => {
        switch (document.getElementById("filter").value) {
            case ("completed"): {
                this.setState({
                    filteredTodos: this.state.todos.filter(item => item.completed === true)
                })
                break;
            }
            case ("incompleted"): {
                this.setState({
                    filteredTodos: this.state.todos.filter(item => item.completed === false)
                })
                break;
            }
            default: {
                this.setState({
                    filteredTodos: this.state.todos
                })
            }
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            this.filterTodo()
        }
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
                        <select name="filter" id="filter" onChange={this.filterTodo}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incompleted">Incompleted</option>
                        </select>
                    </div>
                </div >

                <div className="todos">
                    {this.state.filteredTodos.map((newTodo) => (
                        <Todo
                            task={newTodo.task}
                            key={newTodo.id}
                            id={newTodo.id}
                            completed={newTodo.completed}
                            completeBtn={this.completeHandler.bind(this)}
                            deleteBtn={this.deleteHandler.bind(this)}
                        />
                    ))}


                </div>
            </div>
        )
    }
}

export default Todolist


