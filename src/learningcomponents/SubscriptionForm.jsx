// src/components/SubscriptionForm.js
import React, { useState } from 'react';


const SubscriptionForm = ({ onSubscribe }) => {
  const [userName, setuserName] = useState('');

  const handleSubscribe = () => {
    
    console.log(`Subscribed with userName: ${userName}`);
    onSubscribe();
  };

  return (
    <div>
      <h2 className='text-3xl font-bold'>Subscribe to Access Learning Content</h2>
      <label className='text-2xl font-bold m-10'>
        userName:
        <input type="userName" value={userName} onChange={(e) => setuserName(e.target.value)} />
      </label>

      
      <button className='text-2xl font-bold  border border-2 rounded-md px-4 py-2'
       onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscriptionForm;
