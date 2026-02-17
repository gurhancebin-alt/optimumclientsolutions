import { Link } from 'react-router-dom';
import { FileText, TrendingUp, Download, Mail } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import { blogCategories, getFeaturedArticles } from '../../data/blog';

export default function BlogSidebar({ activeCategory, onCategoryChange, popularArticles }) {
  const popular = popularArticles || getFeaturedArticles(5);

  return (
    <aside className="space-y-6">
      {/* Category Filters */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange && onCategoryChange('all')}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              activeCategory === 'all'
                ? 'bg-cyan-600 text-white font-semibold'
                : 'text-slate-300 hover:bg-white/5'
            }`}
          >
            All Articles
          </button>
          {blogCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange && onCategoryChange(category.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                activeCategory === category.slug
                  ? 'bg-cyan-600 text-white font-semibold'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <CategoryBadge category={category} linked={false} />
            </button>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp size={18} className="text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Popular Articles</h3>
        </div>
        <div className="space-y-3">
          {popular.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="block pb-3 border-b border-white/10 last:border-0 last:pb-0 hover:text-cyan-400 transition-colors group"
            >
              <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 mb-1">
                {article.title}
              </h4>
              <p className="text-xs text-slate-500">{article.readTime} min read</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Intelligence Hub CTA */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-3">
          <FileText size={18} className="text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Need Custom Research?</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">
          Get professional market intelligence reports with structured data analysis and actionable insights.
        </p>
        <Link
          to="/intelligence"
          className="block w-full px-4 py-2 bg-cyan-600 text-white text-center font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
        >
          Explore Intelligence Hub
        </Link>
      </div>

      {/* Lead Magnet */}
      <div className="glass border-2 border-indigo-500/30 rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Download size={18} className="text-indigo-400" />
          <h3 className="text-lg font-bold text-white">Free Sample Report</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">
          Download a complete market intelligence report sample to see our analysis framework in action.
        </p>
        <button className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition-colors">
          Download Sample PDF
        </button>
      </div>

      {/* Newsletter Signup */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Mail size={18} className="text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Weekly Insights</h3>
        </div>
        <p className="text-sm text-slate-300 mb-4">
          Get data-driven e-commerce analysis delivered to your inbox every week.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 glass border-0 rounded-lg mb-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="w-full px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors text-sm">
          Subscribe
        </button>
      </div>
    </aside>
  );
}
