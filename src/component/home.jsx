import React from "react";
import About from "../container/about";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-700 via-cyan-400 to-purple-600 h-[300px] p-8 justify-center items-center flex flex-col gap-4">
        <h1 className="text-4xl text-white font-serif">Welcome to the Home Page</h1>
        <p className="text-white">
          This is the main landing page of the application.
        </p>
      </div>
      <About />
    </>
  );
}
