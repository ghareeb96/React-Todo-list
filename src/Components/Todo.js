import React, { Component } from 'react'
import "./Todo.css"

export class Todo extends Component {

    // state = {
    //     todo: {
    //         task: this.props.task,
    //         id: this.props.id,
    //         completed: this.props.completed
    //     }
    // }
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
                        className="completed"
                        onClick={this.completeBtnHandler.bind(this)}>
                        <i className="far fa-check-square"></i>
                    </button>
                    <button
                        className="delete"
                        onClick={this.deleteBtnHandler.bind(this)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Todo
