import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right';
}

export function ScrollAnimateWrapper({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  animation
}: ScrollAnimateWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map animation to direction
  const getDirection = (): 'up' | 'down' | 'left' | 'right' => {
    if (animation) {
      switch (animation) {
        case 'fade-in-up':
        case 'fade-up':
          return 'up';
        case 'fade-in-down':
        case 'fade-down':
          return 'down';
        case 'fade-in-left':
        case 'fade-left':
          return 'left';
        case 'fade-in-right':
        case 'fade-right':
          return 'right';
      }
    }
    return direction;
  };

  const getTransform = () => {
    const dir = getDirection();
    switch (dir) {
      case 'up': return 'translateY(30px)';
      case 'down': return 'translateY(-30px)';
      case 'left': return 'translateX(30px)';
      case 'right': return 'translateX(-30px)';
      default: return 'translateY(30px)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
