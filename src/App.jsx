import { useState } from "react";
import Timecard from "./components/TimeCard";
import "./App.css";

function App() {
  

  return (
    <div  className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">FocusFlow</h1>
        <button className="text-sm border rounded px-2 py-1 hover:bg-gray-200 transition">
          ☀ / 🌙
        </button>
      </header>

      {/* Timecard */}
      <Timecard />
      
    </div>

  );
}

export default App;
