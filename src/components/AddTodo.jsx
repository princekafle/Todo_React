import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [newTask, setNewTask] = useState("");

  function createNewTask() {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      name: newTask,
      isComplete: false,
    };
    addTodo(task);
    setNewTask("");
  }

  return (
    <div className="my-5 flex items-center justify-between gap-3">
      <input
        type="text"
        value={newTask}
        placeholder="Add a new task"
        className="border w-full rounded px-2 py-1 bg-white border-slate-300"
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button
        onClick={createNewTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-1 rounded my-1"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;