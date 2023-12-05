// Headerland.jsx
import React from "react";
import Navland from "./Navland"; // Import your navigation component here

function Headerland() {
  return (
    <header className="bg-blue-950 text-white py-4">
      {/* Your header content */}
      <div className="container mx-auto">
        <h1 className="text-2xl">Your Logo</h1>
      </div>
      {/* Integrating the Navland component */}
      <Navland />
    </header>
  );
}

export default Headerland;
