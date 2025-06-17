
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export const useTypewriter = ({ text, delay = 0, speed = 100 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);

    const timeout = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return { displayText, isComplete };
};
