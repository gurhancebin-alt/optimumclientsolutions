import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', direction = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();

  const directionClasses = {
    up: 'translate-y-8',
    left: '-translate-x-8',
    right: 'translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
