import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="header-time">
      {time}
    </div>
  );
}

export default Clock;