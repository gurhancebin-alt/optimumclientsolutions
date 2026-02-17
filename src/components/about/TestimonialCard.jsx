import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass rounded-xl p-6 h-full flex flex-col border-l-4 border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 group">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote size={32} className="text-cyan-400/30 group-hover:text-cyan-400/50 transition-colors" />
      </div>

      {/* Quote Text */}
      <blockquote className="flex-1 mb-6">
        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
          "{testimonial.quote}"
        </p>
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-white/10 pt-4">
        <div className="font-semibold text-white text-sm">
          {testimonial.author}
        </div>
        <div className="text-xs text-slate-500 mt-1">
          {testimonial.role}
        </div>
      </div>

      {/* Focus Badge (optional) */}
      {testimonial.focus && (
        <div className="mt-3 inline-flex items-center px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs font-semibold text-cyan-400">
          {testimonial.focus === 'analytical' ? '📊 Data-Focused' : testimonial.focus}
        </div>
      )}
    </div>
  );
}
