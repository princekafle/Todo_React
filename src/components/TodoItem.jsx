import { useState } from "react";
import edit from '/public/edit.png';
import del from '/public/delete.png';

function TodoItem({todo, removeTodo, updateTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.name);

  function saveEdit() {
    updateTodo(todo.id, {...todo, name: text.trim() });
    setIsEditing(false);
  }

  return (
    <div
      className={`bg-white my-2 rounded-lg px-4 py-2 flex items-center justify-between gap-3 ${
        todo.isComplete ? "opacity-50" : ""
      }`}
    >
       <input
        type="checkbox"
        checked={todo.isComplete} // if todo is complete, check the box
        className="cursor-pointer"
        onChange={() =>
          updateTodo(todo.id, {...todo, isComplete: !todo.isComplete }) // If it was true, it becomes false. If it was false, it becomes true.
        }
      />
      <input
        type="text"
        value={text}
        disabled={!isEditing}
        className= {` ${todo.isComplete ? "line-through" : ""} ${
          isEditing ? "border-2" : ""
        } w-full px-2 border-slate-300 rounded`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            saveEdit();
          }
        }}
        onChange={(e) => setText(e.target.value)}
      />

      <button 
      className="bg-blue-100 px-2 py-1 shadow hover:bg-blue-400 rounded cursor-pointer"
        onClick=
        {() => {
          setIsEditing(true);
        }}>
        <img src={edit} alt="" srcset="" className="h-7 w-11" />
      </button>

      <button 
      className="bg-red-100 px-2 py-1 shadow hover:bg-red-400 rounded cursor-pointer"
      onClick={() => removeTodo(todo.id)}
      
      >
      
        <img src={del} alt="" srcset="" className="h-7 w-11" />
      </button>
    </div>
  );
}

export default TodoItem;
