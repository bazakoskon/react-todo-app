import React from "react"

class TodoItem extends React.Component {
    render(){
        return <li key={this.props.todo.id}>
                {this.props.todo.id}{' '}
                {this.props.todo.title}
                <input type="checkbox" 
                    name="isChecked" 
                    checked={this.props.todo.completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)} 
                />
                {this.props.todo.dueDate}
                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
            </li>
    }
}

// function TodoItem(props) {
//     return <li key={props.todo.id}>{props.todo.title}<input type="checkbox" name="isChecked" checked={props.todo.completed} onChange='#' /> {props.todo.dueDate}</li>
//   }
export default TodoItem