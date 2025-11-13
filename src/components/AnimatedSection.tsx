import { ReactNode } from 'react';
import { useIntersectionObserver } from '../lib/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getAnimationClass = () => {
    if (!isIntersecting) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-in-up';
      case 'slide-left':
        return 'animate-slide-in-left';
      case 'slide-right':
        return 'animate-slide-in-right';
      case 'scale-in':
        return 'animate-zoom-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${getAnimationClass()} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transform: isIntersecting ? 'none' : 'translateY(20px)'
      }}
    >
      {children}
    </div>
  );
} 