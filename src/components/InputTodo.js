import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
    dueDate: "2022-10-01"
  };

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
      });
  };

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title, this.state.dueDate)
      this.setState({
        title: "",
        dueDate: "2022-10-01"
      })
    } else {
      alert("Please write item")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.onChange}/>
        <input type="date" className="input-date" name="dueDate" value={this.state.dueDate} onChange={this.onChange}/>
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo