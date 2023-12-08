import React from "react";
import "tailwindcss/tailwind.css";
import Cardsopp from "./Cardsopp";

function Headeropp() {
  const headerStyle = {
    //backgroundImage: "url('/",
    backgroundSize: "cover", // Optional: Adjust the background size
    backgroundPosition: "center center", // Optional: Adjust the background position
    minHeight: "300px", // Set a minimum height for the header
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={headerStyle}>
      <div>
        <h4 className="text-white font-bold ">OPPORTUNITIES</h4>

        <Cardsopp />
      </div>
    </div>
  );
}
export default Headeropp;
