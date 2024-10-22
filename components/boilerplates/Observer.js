import React, { useEffect } from 'react';

// Throttle function
const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
};

const ScrollComponent = () => {
  console.log("scrolled");
  const handleScroll = throttle(() => {
    console.log('Scrolled!');
    // Your scroll handling logic here
  }, 2000); // Set the throttle delay in milliseconds

  useEffect(() => {
    // Attach the throttled scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div style={{ height: '1000px', background: '#eee' }}>
      {/* Content to make the page scrollable */}
      <p>Scroll down to trigger the throttled scroll event.</p>
    </div>
  );
};

export default ScrollComponent;
