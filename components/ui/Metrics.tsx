'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: number;
  icon?: string;
  color?: 'accent' | 'accent2' | 'success';
  suffix?: string;
}

export function MetricCard({ label, value, icon, color = 'accent', suffix = '' }: MetricCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const colorClasses = {
    accent: 'text-accent',
    accent2: 'text-accent2',
    success: 'text-success',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass p-5 hover:bg-panel/80 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-mute mb-1 uppercase tracking-wide">{label}</p>
          <p className={`text-3xl font-bold ${colorClasses[color]}`}>
            {count}{suffix}
          </p>
        </div>
        {icon && (
          <span className="text-3xl opacity-50">{icon}</span>
        )}
      </div>
    </motion.div>
  );
}

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: 'accent' | 'accent2' | 'success';
}

export function ProgressBar({ value, max, label, color = 'accent' }: ProgressBarProps) {
  const percentage = (value / max) * 100;

  const colorClasses = {
    accent: 'from-accent to-accent2',
    accent2: 'from-accent2 to-accent',
    success: 'from-success to-accent',
  };

  return (
    <div>
      {label && (
        <div className="flex justify-between text-xs text-mute mb-1">
          <span>{label}</span>
          <span>{value}/{max}</span>
        </div>
      )}
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses[color]}`}
        />
      </div>
    </div>
  );
}
