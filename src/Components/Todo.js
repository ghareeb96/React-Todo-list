import React, { Component } from 'react'
import "./Todo.css"

export class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <div className="task-description">
                    <h2>{this.props.task}</h2>
                </div>
                <div className="task-btns">
                    <button className="completed"><i className="far fa-check-square"></i></button>
                    <button className="delete"><i className="fas fa-trash-alt"></i></button>
                </div>
            </div>
        )
    }
}

export default Todo
