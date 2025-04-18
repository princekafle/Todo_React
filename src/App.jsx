import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

function App() {
  // const [stateVariableName, functionToUpdateThisStateVar] = useState(InitalValue)
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : []; // stored data xa vane parse garera return garne, stored data chaina vane empty array return garne

  });

  function addTodo(task) {
    setTodos([task, ...todos]);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => todo.id != id);

    setTodos(remainingTodos);
  }

  function updateTodo(id, data) {
    const updatedTodos = todos.map((todo) => (todo.id === id ? data : todo));

    setTodos(updatedTodos);
  }

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="py-20 px-8">
      <div className="container w-full md:w-2/3 lg:w-1/2 mx-auto py-5 px-6 md:py-8 md:px-12 bg-slate-100 shadow-lg rounded-2xl">
        <Title />
        <AddTodo addTodo={addTodo} />

        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;