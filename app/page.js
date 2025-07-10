'use client'
import { useState } from "react";

export default function Home() {
  const [result, setresult] = useState('');
  const [expression, setexpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setresult(eval(expression).toString());
      } catch (error) {
        setresult('Error');
      }
    } else if (value === 'C') {
      setresult('');
      setexpression('');
    } else {
      setexpression(prev => prev + value);
    }
  };

  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <input
          type="text"
          className="w-full mb-2 text-2xl border-b-2 border-gray-400 outline-none text-right"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-3xl font-bold mb-4 outline-none text-right"
          value={result}
          readOnly
        />

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="text-2xl bg-gray-200 hover:bg-gray-400 p-4 rounded-lg font-semibold"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
