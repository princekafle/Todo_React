import React, { useState } from "react";

function AddTodo({ add }) {

  const [tasks, settasks] = useState("");

function createTask(){
  if(!tasks.trim()) return;
  const NewTask ={
    id: Date.now(),
    name: tasks,
    isComplete: false,
  }

add(NewTask);
settasks("");

}




  return (
    <div className="my-5 flex items-center justify-between gap-3">
      <input
        type="text"
        value={tasks}
        placeholder="Add a new task"
        className="border w-full rounded px-2 py-1 bg-white border-slate-300"
        onChange={(e) => { settasks(e.target.value);}}
      
      />
      <button
        onClick = {createTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-1 rounded my-1"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;