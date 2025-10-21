import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  return (
    <div>
      <h2>父组件</h2>
      <ChildComponent message={message} />
      <button onClick={() => setMessage('Message updated!')}>更新消息</button>
    </div>
  );
};

export default ParentComponent;
