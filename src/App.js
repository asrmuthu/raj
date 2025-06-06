import React, { useState } from 'react'

const App = () => {
  const [val, setVal] = useState(0);

  return (
    <div>
      App
      {val}
      <button onClick={() => setVal(val + 1)} data-test-id="button">Click Me</button>
    </div>
  )
}

export default App