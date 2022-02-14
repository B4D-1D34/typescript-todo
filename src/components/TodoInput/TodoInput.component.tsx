import { observer } from "mobx-react-lite";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import todoStore from "../../store/todoStore";

import "./TodoInput.styles.scss";

const TodoInput = () => {
  const [input, setInput] = useState("");

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setInput(value);

  const handleSubmit = ({ keyCode }: KeyboardEvent) => {
    if (keyCode === 13) handleCreate();
  };

  const handleCreate = () => {
    if (input.trim()) {
      todoStore.createTodo({ title: input, completed: false, id: uuidv4() });
      setInput("");
    }
  };

  return (
    <div className="TodoInput">
      <h2 className="TodoInput-title">New Todo: </h2>
      <div className="TodoInput-inputWrapper">
        <input
          className="TodoInput-input"
          value={input}
          onChange={handleChange}
          onKeyDown={handleSubmit}
          type="text"
        />
        <div className="TodoInput-submit" onClick={handleCreate}>
          V
        </div>
      </div>
    </div>
  );
};

export default observer(TodoInput);
