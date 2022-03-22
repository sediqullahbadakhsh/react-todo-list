import React from "react";
import TodoItem from "./TodoItem";

class Todolist extends React.Component {
  render() {
    const { handleChangeProps, deleteTodoProps, setUpdate, todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    );
  }
}
export default Todolist;
