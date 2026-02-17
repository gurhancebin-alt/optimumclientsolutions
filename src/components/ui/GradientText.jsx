export default function GradientText({ children, className = '' }) {
  return (
    <span
      className={`bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
