
import { useState, useEffect } from 'react';

interface UseRotatingKeywordsProps {
  keywords: string[];
  interval?: number;
  initialDelay?: number;
}

export const useRotatingKeywords = ({ 
  keywords, 
  interval = 2000, 
  initialDelay = 1000 
}: UseRotatingKeywordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (keywords.length <= 1) return;

    const startRotation = () => {
      const rotationInterval = setInterval(() => {
        setIsAnimating(true);
        
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % keywords.length);
          setIsAnimating(false);
        }, 200);
        
      }, interval);

      return rotationInterval;
    };

    const timeout = setTimeout(() => {
      const intervalId = startRotation();
      return () => clearInterval(intervalId);
    }, initialDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [keywords, interval, initialDelay]);

  return {
    currentKeyword: keywords[currentIndex],
    isAnimating,
    currentIndex
  };
};
