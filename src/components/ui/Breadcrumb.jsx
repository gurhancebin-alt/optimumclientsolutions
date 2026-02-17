import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-4">
      <ol className="flex items-center space-x-2 text-sm text-slate-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index > 0 && <ChevronRight size={14} className="text-slate-600" />}
            {item.to ? (
              <Link to={item.to} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
