import { useState } from "react";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    setTodoList([...todoList, task]);
  };
  return (
    <div>
      <label>Task</label>
      <input type="text" onChange={(event) => setTask(event.target.value)} />
      <button onClick={addTask}>Add</button>
      {todoList.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};

export default Todo;
