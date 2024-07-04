import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-red-500 justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App</h1>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
        Click Me
      </button>
    </div>
  );
};

export default HomePage;
