export default function GlassCard({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ${
        hover ? 'hover:bg-white/10 hover:-translate-y-2 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
