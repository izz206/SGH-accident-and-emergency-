import React, { useState } from 'react';

function App() {
  // Define a piece of state named 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Hello, React in PyCharm!</h1>
      <p>You clicked the button {count} times.</p>

      {/* Clicking this button updates the state and triggers a re-render */}
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;