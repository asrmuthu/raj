import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount((pre) => pre + 1)
  }
  return (
    <div><h1>{count}</h1>
    <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App