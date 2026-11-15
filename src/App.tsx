import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          React + TypeScript
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Vite + Tailwind CSS is ready!
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;