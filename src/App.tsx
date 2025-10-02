import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Нажми меня
      </button>
      <p className="mt-4 text-gray-800">Ты нажал {count} раз</p>
    </div>
  );
}

export default App;
