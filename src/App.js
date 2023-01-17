import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          "justify-content": "space-between",
          margin: "1rem",
          "padding-bottom": "1rem",
          "border-bottom": "1px solid #ccc",
        }}
      >
        <h3 style={{ margin: "0 0 0.25rem 0" }}>Sushi</h3>
        <div style={{ "font-style": "italic" }}>I prefer steak than sushi.</div>
        <div
          style={{
            "margin-top": "0.25rem",
            "font-weight": "bold",
            color: "#ad5502",
            "font-size": "1.25rem",
          }}
        >
          $9.99
        </div>
      </div>
    </div>
  );
}

export default App;
