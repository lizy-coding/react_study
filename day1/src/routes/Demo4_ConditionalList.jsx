// 基础语法
import React, { useState } from "react";

export default function Demo4_ConditionalList() {
  const [showList, setShowList] = useState(true);

  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Carol", age: 20 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>条件 + 列表渲染 Demo</h2>
      <button onClick={() => setShowList(!showList)}>
        {showList ? "隐藏列表" : "显示列表"}
      </button>

      {/* 条件渲染 */}
      {showList && (
        <ul style={{ marginTop: 10 }}>
          {/* 列表渲染 */}
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - 年龄：{user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
