import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditting: false
        }
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    render() {
        let result;
        if (this.state.isEditting) {
            result = (
                <div>
                    <form>
                        <input type="text" />
                    </form>
                </div>
            )
        } else {
            <div>
                <li>{this.props.task}</li>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
            </div>
        }
        return result;
    }

}
export default Todo;
