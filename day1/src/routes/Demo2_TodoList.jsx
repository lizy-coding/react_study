// TodoList（添加 + 删除）
import React, { useState } from "react";

export default function Demo2_TodoList() {
  const [todos, setTodos] = useState([]); // 存储 todo 列表
  const [input, setInput] = useState(""); // 输入框内容

  const addTodo = () => {
    if (input.trim() === "") return;
    // 展开旧数组并添加新项
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    // 过滤掉指定下标的 todo
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>TodoList Demo（添加 + 删除）</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入待办事项"
      />
      <button onClick={addTodo} style={{ marginLeft: 8 }}>添加</button>

      <ul style={{ marginTop: 10 }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{ marginLeft: 8 }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
