import { Link } from 'react-router-dom';
import { Store, TrendingUp, ShoppingBag, Package, BarChart3, Globe } from 'lucide-react';

const iconMap = {
  Store,
  TrendingUp,
  ShoppingBag,
  Package,
  BarChart3,
  Globe
};

const colorMap = {
  amber: 'bg-amber-50 border-amber-300 text-amber-700',
  cyan: 'bg-cyan-50 border-cyan-300 text-cyan-700',
  indigo: 'bg-indigo-50 border-indigo-300 text-indigo-700',
  green: 'bg-green-50 border-green-300 text-green-700',
  purple: 'bg-purple-50 border-purple-300 text-purple-700',
  blue: 'bg-blue-50 border-blue-300 text-blue-700'
};

export default function CategoryBadge({ category, size = 'sm', linked = true }) {
  if (!category) return null;

  const Icon = iconMap[category.icon];
  const colorClass = colorMap[category.color] || colorMap.cyan;
  const sizeClass = size === 'md' ? 'px-3 py-1.5 text-sm' : 'px-2 py-1 text-xs';

  const content = (
    <span className={`inline-flex items-center space-x-1.5 ${colorClass} border rounded-lg font-semibold ${sizeClass}`}>
      {Icon && <Icon size={size === 'md' ? 14 : 12} />}
      <span>{category.name}</span>
    </span>
  );

  if (linked) {
    return (
      <Link 
        to={`/blog/category/${category.slug}`}
        className="inline-block hover:opacity-75 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return content;
}
