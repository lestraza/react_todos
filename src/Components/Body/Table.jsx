import React, { Component } from 'react';

export default class Table extends Component {   

    changeTodoStatus = (todo) => {
        const newTodos = [...this.props.todos].map(item => {
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
                    <div className={className} onClick={() => this.changeTodoStatus(todo)}></div>
                    <div className="todo_item" onClick={() => this.changeTodoStatus(todo)}>{todo.title}</div>
                    <div className="todo_delete_cart"
                        onClick={() => this.props.showPopup(todo)}
                    >&#128465;</div>
                </div>
            )
        })
    }

    render() {
        const { todos } = this.props;
        return (
            <div className='todos_container'>
                {this.renderTodos(todos)}                
            </div>
        )
    }
}
