import { useState } from "react";

import TodoFilter from "../TodoFilter/TodoFilter.component";
import TodoInput from "../TodoInput/TodoInput.component";
import List from "../List/List.component";

import "./TodoList.styles.scss";

const TodoList = () => {
  const [filterBy, setFilterBy] = useState("all");

  return (
    <div className="TodoList">
      <TodoInput />
      <TodoFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="TodoList-list">
        <List filterBy={filterBy} />
      </div>
    </div>
  );
};

export default TodoList;
