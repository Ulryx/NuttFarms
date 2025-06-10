import { useState } from 'react'
import './App.css'
import NewsList from "./NewsList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Nutt Farms</h1>
      </header>
      <main>
        <NewsList />
      </main>
    </div>
  );
}

export default App;
