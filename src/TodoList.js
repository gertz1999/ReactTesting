import React, { Component } from 'react'
import Todo from './Todo.js'
import './TodoList.css'
import TodoForm from './TodoForm.js'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} task={todo.task} updateTodo={this.update} toggleTodo={this.toggleCompletion} completed={todo.completed} removeTodo={this.remove} />;
        })
        return (
            <div className='TodoList'>
                <h1>Todo List</h1>
                <TodoForm createTodo={this.create} />
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
export default TodoList;
