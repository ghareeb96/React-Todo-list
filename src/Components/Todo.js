import React, { Component } from 'react'
import "./Todo.css"

export class Todo extends Component {


    completeBtnHandler = () => {
        this.props.completeBtn(this.props.id)
    }
    deleteBtnHandler = () => {
        this.props.deleteBtn(this.props.id)
    }

    render() {
        return (
            <div className={this.props.completed ? "todo completed" : "todo incompleted"}>
                <div className="task-description">
                    <h2>{this.props.task}</h2>
                </div>
                <div className="task-btns">
                    <button
                        className="completeBtn"
                        onClick={this.completeBtnHandler.bind(this)}>
                        <i className={this.props.completed ? "fas fa-times" : "fas fa-check"}></i>
                    </button>
                    <button
                        className="deleteBtn"
                        onClick={this.deleteBtnHandler.bind(this)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo