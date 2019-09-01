import React,{Component} from 'react';
import AddForm from './component/AddForm'
import TodoList from './component/TodoList'
import Header from './component/Header'

class App extends Component{
  // state = {
  //   id: 0,
  //   todos: []
  // }
  
  // addTodo = (todoText) => {
  //   const {todos,id} = this.state
  //   this.setState({
  //     todos: [...todos,{id: id, text: todoText, done: false}],
  //     id: id+1
  //   })
  // }

  // removeTodo = (todoId) => {
  //   const {todos} = this.state
  //   const result = todos.filter(todo => todo.id !== todoId)
  //   this.setState({
  //     todos: result
  //   })
  // }

  // markTodoDone = (todoId) => {
  //   const {todos} = this.state
  //   const Done = todos.map(todo => (todo.id === todoId)? {...todo,done: true}: todo)
  //   const DontDone = todos.map(todo => (todo.id === todoId)? {...todo,done: false}: todo)
  //   const statusDone = todos[todoId].done ? DontDone : Done
  //   console.log(statusDone)
  //   this.setState({
  //     todos: statusDone
  //   })
  // }

  render(){
    return (
      <div id="main">
        {/* <Header />
        <TodoList items={this.state.todos} onRemove={this.removeTodo} markTodoDone={this.markTodoDone} />
        <AddForm onAddTodo={this.addTodo}  /> */}
        <Header />
        <TodoList  />
        <AddForm   />
      </div>
    )
  }
}


export default App;
