import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
        /* <li key={todo.id}>{todo.title} <input type="checkbox" name="isChecked" checked={todo.completed} /> {todo.dueDate}</li> */

        <TodoItem key={todo.id} todo={todo} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps}/>    
        
        ))}
      </ul>
    )
  }
}

export default TodosList