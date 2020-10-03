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
    saveTodos = () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }

    getTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]))
        } else {
            this.setState({
                todos: JSON.parse(localStorage.getItem(("todos")))
            })
        }
    }

    handleInput = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }


    addTodo = () => {
        if ((this.state.inputText).trim()) {
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
            this.saveTodos()
        }
    }
    componentDidMount() {
        if (this.state.todos !== this.state.filteredTodos) {
            this.getTodos();
            this.filterTodo()

        }
    }


    render() {
        const todos = this.state.filteredTodos.map((newTodo, i) => (
            <Todo
                task={newTodo.task}
                key={i}
                id={newTodo.id}
                completed={newTodo.completed}
                completeBtn={this.completeHandler.bind(this)}
                deleteBtn={this.deleteHandler.bind(this)}
            />
        ));
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
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>

                    <div className="filter-bar">
                        <i className="fas fa-caret-down"></i>
                        <select name="filter" id="filter" onChange={this.filterTodo}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="incompleted">Incompleted</option>
                        </select>
                    </div>
                </div >

                <div className="todos">
                    {todos}
                </div>
            </div>
        )
    }
}

export default Todolist