import React, {Component} from 'react';
import Todos from './Todos';

import '../App.css';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: []
  }

  markAsComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
       return todo;
      })
    });
  }

  addTodo = (title) => {
    if (title.length) {
      const newID = this.state.todos.length + 1;
      const newTodo = {
        id: newID,
        title,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
    } else {
      alert("Please enter ");
    }
  }


  render() {
   return (
      <div>
        <h1 className="text-center">E hana</h1>   
        
        {/* 
            Add Todo form in AddTodo component
            Injects addTodo function to AddTodo component 
         */}
        <AddTodo addTodo = {this.addTodo}/>

        {/* List of todo items */}
        <Todos  
          todos = {this.state.todos} 
          markAsComplete = {this.markAsComplete} 
        />
        
     </div>
    );
  }
}

export default App;