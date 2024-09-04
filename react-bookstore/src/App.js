import React from "react";
import "./App.css";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Bookstore</h1>
        <BookList />
      </header>
    </div>
  );
}

export default App;
