import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    return (
      <div className='todo-list'>
        {
          this.props.todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo = {todo}
              markAsComplete = {this.props.markAsComplete}  
            />
            // I used new line for each prop for better readability
           )
          )
        }
      </div>
    )
  }
}

export default Todos;