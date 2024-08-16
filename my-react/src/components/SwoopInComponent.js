import React, { useEffect, useState } from 'react';
import '../styles/swoop.css';

const SwoopInComponent = ({item, delay}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`swoop-in ${isVisible ? 'visible' : ''}`}>
      {item}
    </div>
  );
};

export default SwoopInComponent;