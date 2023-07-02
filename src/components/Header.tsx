import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="bg-blue-200 h-10">
        <div className="flex justify-between mx-5">
          <h1>Check Home</h1>
          <div className="">
            <button>+</button>
            <button>+</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
