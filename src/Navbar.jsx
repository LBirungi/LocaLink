import React from "react";

function Navbar(){
  return(
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="logo text-2x1 font-bold"></div>
      <div className="auth-buttons flex items-right">
        <a href="#" className="text-green-500 hover:text-green-700">Sign Up</a>

        <a href="#" className="text-green-500 hover:text-green-700">Login</a>
        </div>
        </nav>



    
  )
}

export default Navbar;