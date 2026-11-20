import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "60px", fontFamily: "sans-serif" }}>
      <h1>تطبيق العداد</h1>
      <p style={{ fontSize: "48px", fontWeight: "bold" }}>{count}</p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>زيادة (+1)</button>
        <button onClick={() => setCount(count - 1)}>إنقاص (-1)</button>
        <button onClick={() => setCount(0)}>إعادة تعيين (0)</button>
      </div>
    </div>
  )
}

export default App