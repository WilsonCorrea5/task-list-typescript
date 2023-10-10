import { useState } from "react";
import { TaskList } from "./TaskList";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const handleAdd = () => {
    if (newTask.trim() === "") return;
    setTaskList((prevState) => [...prevState, newTask]);
    setNewTask("");
  };
  const handleDelete = (index: number) => {
    setTaskList((task) => task.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>TodoApp</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDelete} />
    </div>
  );
};
