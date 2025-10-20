// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo1_CounterRoute from "./routes/Demo1_Counter";
import Demo2_TodoListRoute from "./routes/Demo2_TodoList";
import Demo3_ParentChildRoute from "./routes/Demo3_ParentChild";
import Demo4_ConditionalListRoute from "./routes/Demo4_ConditionalList";

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: 20 }}>
        <h1>React Demo 学习</h1>
        <nav>
          <ul>
            <li><a href="/demo1">计数器 Demo</a></li>
            <li><a href="/demo2">TodoList Demo</a></li>
            <li><a href="/demo3">父子组件 Demo</a></li>
            <li><a href="/demo4">条件与列表渲染 Demo</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/demo1" element={<Demo1_CounterRoute />} />
          <Route path="/demo2" element={<Demo2_TodoListRoute />} />
          <Route path="/demo3" element={<Demo3_ParentChildRoute />} />
          <Route path="/demo4" element={<Demo4_ConditionalListRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
