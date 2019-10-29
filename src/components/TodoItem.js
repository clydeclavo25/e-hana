import React, { Component } from 'react'

export class TodoItem extends Component {

  // I added a styling to todo items that are marked as completed
  completedStyle = () => {
    return this.props.todo.completed ? 'todo-done' : '' ;
  }


  render() {
    // Deconstructuring to prevent repetition of this.props.todo 
    const { id, title, completed } = this.props.todo;

    return (
      <div className={`todo-item ${this.completedStyle()}`} >
        <label>
          <input 
              checked={completed}
              type="checkbox" 
              onChange={this.props.markAsComplete.bind(this, id)}
            />
          { title }   
        </label>
      </div>
    )
  }
}

export default TodoItem
