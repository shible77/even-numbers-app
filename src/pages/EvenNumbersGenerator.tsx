import React, { useState } from 'react';

const EvenNumbersGenerator: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateEvenNumbers = () => {
    const evenNumbers = [];
    for (let i = 0; i < count; i++) {
      evenNumbers.push(2 * (i + 1));
    }
    setNumbers(evenNumbers);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Even Numbers Generator
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter number of even numbers:
          </label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 0)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="1"
          />
        </div>
        <button
          onClick={generateEvenNumbers}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          disabled={count <= 0}
        >
          Generate
        </button>
        {numbers.length > 0 && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">Even Numbers:</h2>
            <ul className="list-decimal list-inside mt-2">
              {numbers.map((num, index) => (
                <li key={index} className="text-gray-600">{num}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EvenNumbersGenerator;