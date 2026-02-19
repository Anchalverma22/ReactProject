import React, { useState } from "react";

function UseStateHook() {
  // Counter State
  const [count, setCount] = useState(0);

  // Input State
  const [name, setName] = useState("");

  // Todo State (Array of objects)
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = () => {
    if (name.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: name
    };

    setTodos([...todos, newTodo]);
    setName("");
  };

  return (
    <div>
      <h2>useState Practice</h2>

      {/* Counter */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Count: {count}</p>

      {/* Input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* List Rendering */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateHook;
