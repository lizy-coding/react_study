//计数器组件（useState）
import React, { useState } from "react";

export default function Demo1_Counter() {
  // 声明一个状态变量 count，初始值为 0
  const [count, setCount] = useState(0);

  // 点击按钮时更新 count 状态
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>计数器 Demo（useState）</h2>
      <p>当前计数：{count}</p>
      <button onClick={handleDecrement}>- 减一</button>
      <button onClick={handleIncrement} style={{ marginLeft: 8 }}>
        + 加一
      </button>
    </div>
  );
}
