// props 回调
import React, { useState } from "react";

function Child({ count, onAdd }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}>
      <h4>子组件</h4>
      <p>父组件传来的 count 值：{count}</p>
      <button onClick={onAdd}>子组件点击 +1</button>
    </div>
  );
}

export default function Demo3_ParentChild() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);

  return (
    <div style={{ padding: 20 }}>
      <h2>父子组件通信 Demo</h2>
      <p>父组件计数：{count}</p>
      {/* 向子组件传入 count 和回调函数 */}
      <Child count={count} onAdd={handleAdd} />
    </div>
  );
}
