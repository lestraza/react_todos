import React, { Component } from 'react';
import { getTodos } from '../../services/services';

export default class Table extends Component {
    state = {
        todos: [],
    }

    componentDidMount() {
        getTodos()
            .then(todos => {
                this.setState({
                    todos
                })
            })
    }

    changeTodoStatus = (todo) => {
        const newTodos = [...this.state.todos].map(item => {
            if (item.id === todo.id) {
                item.completed = !item.completed;
            }
            return item;
        })

        this.setState({
            todos: newTodos
        })
    }

    renderTodos = (todos) => {
        return todos.map(todo => {
            const className = `todo_status ${todo.completed === true ? "completed" : "not_completed"}`
            return (
                <div className='todo_box' key={todo.id}>
                    <div className={className}
                        onClick={() => this.changeTodoStatus(todo)}
                    ></div>
                    <div className="todo_item">{todo.title}</div>
                </div>
            )
        })
    }

    render() {
        const { todos } = this.state;

        return (
            <div className='todos_container'>
                {this.renderTodos(todos)}
            </div>

        )
    }
}
