import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
        dueDate: '2022-10-11T09:00:35.348Z'
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
        dueDate: '2022-10-11T09:01:35.348Z'
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
        dueDate: '2022-10-11T09:02:35.348Z'
      }
    ]
   };


  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
        <React.Fragment>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
        </React.Fragment>
    )
  }
}
export default TodoContainer