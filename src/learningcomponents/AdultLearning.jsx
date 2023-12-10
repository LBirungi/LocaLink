import React, { useState } from "react";
import SubscriptionForm from "./SubscriptionForm";
import LearningList from "./LearningList";

const AdultLearning = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  const containerStyle = {
    backgroundImage: 'url("/Kwanza.jpg")',// Replace with the actual path to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    //color: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",

    rounded: "lg",


    maxWidth: "80%", 
    margin: "auto",

  };

  const textContainerStyle = {
    textAlign: "center",
    margin: "10px",  
    fontSize: "3em", 
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1>Welcome to Free Adult Learning For All</h1>
        <p>Explore a world of knowledge at your fingertips!!</p>
      </div>

      <SubscriptionForm onSubscribe={handleSubscribe} />

      <LearningList subscribed={subscribed} />
    </div>
  );
};

export default AdultLearning;
