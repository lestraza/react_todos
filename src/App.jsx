import React, { Component } from 'react';
import { getTodos } from './services/services';

import Background from './Components/Body/Background';
import Header from './Components/HeaderFooter/Header';
import UserNav from './Components/Body/UserNav';
import Table from './Components/Body/Table';
import PopupMessage from './Components/Body/PopupMessage';


export default class App extends Component {

  state = {
    todos: [],
    filteredTodos: [],
    popupMessage: false,
    todoIdRemove: -1
  }

  componentDidMount() {
    getTodos()
      .then(todos => {
        this.setState({
          todos,
          filteredTodos: todos,
        })
      })
  }

  deleteTodo = () => {
    const newTodos = [...this.state.filteredTodos];
    newTodos.map(item => {
      if (item.id === this.state.todoIdRemove) {
        newTodos.splice(item, 1)
      }
      return item;
    })
    this.setState({
      filteredTodos: newTodos,
      popupMessage: false
    })
  }

  filterTodosByUserId = (id) => {
    const filteredTodos = this.state.todos.filter(item => {
      return item.userId === id
    })
    this.setState({
      filteredTodos
    })
  }

  showPopup = (todo) => {
    console.log(todo);
    this.setState({
      popupMessage: true,
      todoIdRemove: todo.id
    })
  };

  closePopup = () => {
    this.setState({
      popupMessage: false,
    })
  }

  render() {
    return (
      <Background>
        <Header />
        <UserNav filterByUserId={this.filterTodosByUserId} />
        <Table todos={this.state.filteredTodos} showPopup={this.showPopup} />
        {this.state.popupMessage && <PopupMessage deleteTodo={this.deleteTodo} closePopup={this.closePopup} />}
      </Background>
    );
  }
}