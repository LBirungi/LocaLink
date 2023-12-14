// Headerland.jsx
import React from "react";
import Navland from "./Navland"; 

const Headerland = () => {
  
    
      


      const headerStyle = {

        background: "url('/afw.jpg')  right no-repeat fixed",

    
    backgroundSize: "60%", // Optional: Adjust the background size
    backgroundPosition: "right", // Optional: Adjust the background position
    minHeight: "80vh", // Set a minimum height for the header
    display: "flex",
    flexDirection: "column",
    alignItems: "left",

    //justifyContent: "center",
    
  };
  return (
<div>
    <Navland />

    <div style={headerStyle}>
      <div className="text-white "
      
      style={{ fontStyle: 'italic',margin:"60px" }}
      
      >


      




      
        
          <div className="font-bold text-xl">WELCOME TO LOCalink</div>
          <h2>ABOUT US</h2>
          <p>
            LocaLink addresses <br /> social-economic
            and leadership gaps <br /> common in our local <br />communities.  It was
            conceived <br /> in the spirit of  building <br />
            relationships, and strengthening the bonds <br /> that tie us <br /> together, in
            order to solve common problems and <br />challenges as a
            community. 
          </p>
        </div>
      </div>
      </div>
    
  );
};

export default Headerland;
