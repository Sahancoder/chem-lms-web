'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;
  pauseDelay?: number;
}

export default function TypewriterText({ 
  text, 
  speed = 100, 
  className = '', 
  loop = false,
  pauseDelay = 2000 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDelay);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length && loop) {
      setIsPaused(true);
    } else if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, speed / 2);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0 && loop) {
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, speed, isDeleting, displayedText, loop, pauseDelay, isPaused]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
