import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 1, className = '' }: HeadingProps) {
  const baseClass = 'font-bold text-text';
  
  const sizes = {
    1: 'text-3xl md:text-4xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClass} ${sizes[level]} ${className}`}>
      {children}
    </Tag>
  );
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-lg font-semibold text-text ${className}`}>
      {children}
    </h2>
  );
}

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`text-xs font-medium text-mute uppercase tracking-wide ${className}`}>
      {children}
    </span>
  );
}
