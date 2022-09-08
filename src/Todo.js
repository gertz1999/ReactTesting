import React, { Component } from 'react'
import "./Todo.css";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditting: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleEdit() {
        this.setState({ isEditting: !this.state.isEditting });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditting: false });
    }
    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let result;
        if (this.state.isEditting) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li onClick={this.handleToggle} className={this.props.completed ? "completed" : ""}>{this.props.task}</li>
                </div>
            )

        }
        return result;
    }

}
export default Todo;
