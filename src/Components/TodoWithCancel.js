import React, { useEffect, useState } from "react";

export const TodoWithCancel = () => {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState(["task1"]);

  const addTask = (e) => {
    e.preventDefault();
    if (task === "") return;

    setTask("");
    setListTask([...listTask, task]);
  };

  const deletBtn = (index) => {
    const newTodos = [...listTask];
    newTodos.splice(index, 1);
    setListTask(newTodos);
  };

  return (
    <div>
      <h1> Todo With Cancel </h1>
      <p>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={addTask}> Add Task </button>
      </p>
      <ul>
        {listTask &&
          listTask.map((value, index) => {
            return (
              <li key={index}>
                {value}{" "}
                <button onClick={() => deletBtn(index)}> Delete </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
