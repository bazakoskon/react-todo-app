import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    render(){

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }

          const { completed, id, title , dueDate} = this.props.todo
        return <li key={id} className={styles.item}>
                <input type="checkbox" 
                    className={styles.checkbox}
                    name="isChecked" 
                    checked={completed} 
                    onChange={() => this.props.handleChangeProps(id)} 
                />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                {" "}
                <span className={styles.dueDate}>
                    {dueDate}
                </span>
                <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
            </li>
    }
}

export default TodoItem