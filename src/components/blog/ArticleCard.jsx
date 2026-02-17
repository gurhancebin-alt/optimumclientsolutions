import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import { getCategoryInfo } from '../../data/blog';

export default function ArticleCard({ article, layout = 'grid' }) {
  const category = getCategoryInfo(article.category);
  
  const cardStyles = layout === 'featured' 
    ? 'lg:col-span-2 lg:row-span-2 p-8' 
    : layout === 'list'
    ? 'flex flex-col md:flex-row gap-6 p-6'
    : 'p-6';

  return (
    <article className={`glass hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group ${cardStyles}`}>
      <div className="flex flex-col h-full">
        {/* Category Badge */}
        <div className="mb-3">
          <CategoryBadge category={category} size="sm" />
        </div>

        {/* Title */}
        <Link to={`/blog/${article.slug}`} className="block mb-3 group-hover:text-cyan-400 transition-colors">
          <h3 className={`font-bold text-white ${layout === 'featured' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {article.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`text-slate-300 leading-relaxed mb-4 flex-grow ${layout === 'featured' ? 'text-base' : 'text-sm'}`}>
          {article.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/10">
          <div className="flex items-center space-x-4">
            <time dateTime={article.publishDate}>
              {new Date(article.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </time>
            <span className="flex items-center space-x-1">
              <Clock size={12} />
              <span>{article.readTime} min read</span>
            </span>
          </div>

          {/* CTA */}
          <Link 
            to={`/blog/${article.slug}`}
            className="flex items-center space-x-1 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            <span>Read Analysis</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Pillar Badge (if applicable) */}
        {article.isPillar && (
          <div className="mt-3 inline-flex items-center px-2 py-1 bg-indigo-500/10 border border-indigo-400/30 rounded-md text-xs font-semibold text-indigo-300">
            📘 Complete Guide
          </div>
        )}
      </div>
    </article>
  );
}
