import React,{Component} from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos : [
      {content:"Finish Project" ,id:"1",complet:false},
      {content:"watch movie"  ,id:"2",complet:false},
      {content:"Finish Homework"  ,id:"3",complet:false},
      {content:"Go to market"  ,id:"4",complet:false}

    ]
  }
  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(item=>{
      return item.id!== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo)  =>{
    todo.id= Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    }) 
  }
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  render(){
    return (
      <div className="App container card">
        <h1>Todo's</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} markComplete={this.markComplete} />
        

      </div>
    );
  }
}

export default App;
