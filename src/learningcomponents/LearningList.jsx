import React, { useEffect, useState } from 'react';

const LearningList = ({ subscribed }) => {
  const [learnings, setLearnings] = useState([]);

  useEffect(() => {
    const fetchLearnings = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/learnings');
        if (!response.ok) {
          throw new Error('Error fetching learnings');
        }
        const data = await response.json();
        setLearnings(data);
      } catch (error) {
        console.error('Error fetching learnings:', error);
      }
    };

    // Fetch learnings only if the user is subscribed
    if (subscribed) {
      fetchLearnings();
    }
  }, [subscribed]);

  if (!subscribed) {
    return <p className='font-bold text-3xl m-10'>Please subscribe to access learning content.</p>;
  }

  return (
    <div>
      <h2 className='font-bold text-2xl'>Learning Content</h2>
      <ul>
        {learnings.map((learning) => (
          <li key={learning.id}>
            <h3>{learning.title}</h3>
            <p>{learning.description}</p>
            {/* Render video or other content here */}
            <video width="320" height="240" controls>
              <source src={video-url} type="video/mp4" />
              
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningList;
