import React, { useState, useEffect } from 'react';

const StateProvider = () => {
  const [states, setStates] = useState({
    lights: false,
    windows: false,
    fan: false,
  });

  useEffect(() => {
    fetch('http://localhost:3002/invokeMethod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        targetDevice: 'rasbperry',
        methodName: 'get_state',
        payload: 'a'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setStates({
        lights: data[0] === 1,
        windows: data[1] === 1,
        fan: data[2] === 1,
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return states;
}

export default StateProvider;