import { createBrowserRouter,RouterProvider,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from "./components/Home";
import Discover from "./discovercomponents/Discover";
import Homeland from "./landing/Homeland.jsx";
import Opportunities from "./servicescomponents/Opportunities.jsx";
import Signup from "./Signup.jsx";
import AdultLearning from "./learningcomponents/adultlearning.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Homeland />} /> */}
        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path="signup"  element={<Signup/>} /> */}
        {/* <Route path="discover" element={<Discover/>} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="opportunities" element={<Opportunities/>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="adultLearning" element={<AdultLearning/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;






