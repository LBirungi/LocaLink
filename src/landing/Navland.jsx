import React from "react";

const Navland = () => {
  return (
    <div
      style={{
        backgroundColor: "blue-950",
        color: "white",
        padding: "0",
        margin: "0",
        width: "100%",
      }}
    >
      <div className="flex justify-between items-center py-4 container mx-auto">
        <div>LOCALINK</div>
        <div>
          <a href="/LOGIN">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "white",
                borderRadius: "8px",
                border: "none",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              LOGIN
            </button>
          </a>

          <a href="/SIGNUP">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#28A745",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              SIGNUP
            </button>
          </a>
        </div>
        <h4>Bridging Gaps, Changing Lives</h4>
      </div>
    </div>
  );
};

export default Navland;
