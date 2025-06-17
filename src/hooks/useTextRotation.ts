
import { useState, useEffect } from 'react';

interface UseTextRotationProps {
  texts: string[];
  interval?: number;
  initialDelay?: number;
}

export const useTextRotation = ({ 
  texts, 
  interval = 3000, 
  initialDelay = 1000 
}: UseTextRotationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (texts.length <= 1) return;

    const startRotation = () => {
      const rotationInterval = setInterval(() => {
        setIsAnimating(true);
        
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsAnimating(false);
        }, 150); // Half of transition duration
        
      }, interval);

      return rotationInterval;
    };

    // Start after initial delay
    const timeout = setTimeout(() => {
      const intervalId = startRotation();
      return () => clearInterval(intervalId);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [texts, interval, initialDelay]);

  return {
    currentText: texts[currentIndex],
    isAnimating,
    currentIndex
  };
};
