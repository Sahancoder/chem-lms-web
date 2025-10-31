import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`glass p-6 ${
        hover ? 'hover:bg-panel/80 hover:-translate-y-0.5 hover:shadow-glass transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardSoft({ children, className = '' }: CardProps) {
  return (
    <div className={`glass-soft p-4 ${className}`}>
      {children}
    </div>
  );
}
