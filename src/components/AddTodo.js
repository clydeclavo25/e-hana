import React, { Component } from 'react'

// Add Todo form
export class AddTodo extends Component {

  state = {
    newTodo: ''
  }

  onInput = (e) => this.setState({ [e.target.name]: e.target.value });
  /* for reactivity
    In this case [e.target.name] will be equal to 'newTodo' the name of the textbox is the same as the item in state.
    I used this approach to prevent repetitive code if ever more onInput is applied to different textboxes.
    Another version of this code looks like this:
    onInput = (e) => this.setState({ 'newTodo' : e.target.value }); */

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    // call addTodo from parent component
    this.setState({ newTodo: '' });
    // clear textbox after submission
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >

         <strong>ToDo:</strong>

            <input
              type="text"
              name="newTodo"
              className="text-box"
              autoComplete="off"
              placeholder="what should you do?"
              value={this.state.newTodo}
              onChange={this.onInput}
            />

            {/* I used new line for each prop for better readability */}

            <input
              type="submit"
              value="Add"
              className="btn"
            />
         
        </form>
      </div>
    )
  }
}

export default AddTodo