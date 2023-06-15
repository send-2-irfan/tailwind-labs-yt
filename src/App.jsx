import { useState } from "react";
import WorkImage from "./assets/beach-work.jpg";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="px-6 py-12 max-w-md mx-auto sm:max-w-xl">
      <img className="h-10" src={logo} alt="vite logo" />
      <img
        className="rounded-lg mt-6 shadow-xl sm:mt-8"
        src={WorkImage}
        alt="image of a lady working on a beach"
      />
      <h1 className="mt-6 text-2xl font-bold text-indigo-500 sm:mt-8 sm:text-4xl">
        You can work from anywhere. <br className="hidden lg:inline" />
        <span className="text-gray-900">Take advantage of it.</span>{" "}
      </h1>
      <p className="text-gray-600 mt-2 sm:text-lg">
        workcation helps you find work-friendly rentals in beautiful location so
        you can enjoy some nice weather even when you're not on vacation.
      </p>
      <div className="mt-4 sm:mt-6">
        <button className="inline-block px-5 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-sm hover:bg-indigo-400 uppercase tracking-widest">
          Book you escape
        </button>
      </div>
    </div>
  );
}

export default App;
