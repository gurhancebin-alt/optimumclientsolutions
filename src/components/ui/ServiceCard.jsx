import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ServiceCard({ icon: Icon, title, description, features = [], link }) {
  return (
    <GlassCard hover className="flex flex-col h-full">
      <div className="text-cyan-400 mb-4">
        {Icon && <Icon size={32} />}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2 text-sm text-slate-300">
              <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {link && (
        <Link
          to={link}
          className="text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors"
        >
          Learn More →
        </Link>
      )}
    </GlassCard>
  );
}
