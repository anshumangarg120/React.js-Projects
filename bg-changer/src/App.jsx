import { useState } from "react"

function App() {
  const [color, setColor ] = useState("olive")

  return (
    <div className="container">
    <div className="content">
      <button 
      onClick={() => setColor("red")}
      className="btn btn1">red</button>
      <button className="btn btn2">red</button>
      <button className="btn btn3">red</button>
      <button className="btn btn4">red</button>
      <button className="btn btn5">red</button>
      <button className="btn btn6">red</button>
      
    </div>
  </div>
    
  )
}

export default App
