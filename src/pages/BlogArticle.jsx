import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Clock, Calendar, ArrowLeft, FileText, ArrowRight, ChevronRight } from 'lucide-react';
import ContentBlock from '../components/blog/ContentBlock';
import ArticleCard from '../components/blog/ArticleCard';
import CategoryBadge from '../components/blog/CategoryBadge';
import ArticleSchema from '../components/blog/ArticleSchema';
import { 
  getArticleBySlug, 
  getRelatedArticles, 
  getCategoryInfo 
} from '../data/blog';

export default function BlogArticle() {
  const { t } = useTranslation('blog');
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  // 404 handling
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const category = getCategoryInfo(article.category);
  const relatedArticles = getRelatedArticles(slug, 3);

  // Generate table of contents from content blocks with headings
  const tableOfContents = article.contentBlocks
    .filter(block => block.heading)
    .map((block, index) => ({
      id: block.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: block.heading,
      index
    }));

  return (
    <>
      <Helmet>
        <title>{article.metaTitle} | Optimum Client Solutions</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <link rel="canonical" href={`https://optimumclientsolutions.com/blog/${article.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://optimumclientsolutions.com/blog/${article.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
      </Helmet>

      {/* Schema Markup */}
      <ArticleSchema article={article} category={category} />

      <div className="min-h-screen pt-20">
        {/* Breadcrumbs */}
        <nav className="py-4 px-6 glass-nav">
          <div className="max-w-5xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} className="text-slate-600" />
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <ChevronRight size={14} className="text-slate-600" />
              <li>
                <Link 
                  to={`/blog/category/${category.slug}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {category.name}
                </Link>
              </li>
              <ChevronRight size={14} className="text-slate-600" />
              <li className="text-white font-semibold truncate max-w-xs">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <header className="py-12 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              <span className="text-sm font-semibold">{t('articles.backToBlog')}</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <CategoryBadge category={category} size="md" />
              {article.isPillar && (
                <span className="ml-3 inline-flex items-center px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-lg text-sm font-semibold text-indigo-700">
                  📘 Complete Guide
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {article.h1 || article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{article.readTime} {t('articles.readTime')}</span>
              </div>
              {article.updatedDate && article.updatedDate !== article.publishDate && (
                <div className="text-slate-500">
                  Updated: {new Date(article.updatedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              )}
            </div>

            {/* Tag Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 glass text-slate-300 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body - Two Column Layout */}
        <div className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3 blog-content">
                {/* Introduction */}
                <div className="mb-12 pb-8 border-b border-slate-800/50">
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {article.introduction}
                  </p>
                </div>

                {/* Content Blocks */}
                {article.contentBlocks.map((block, index) => (
                  <ContentBlock key={index} block={block} index={index} />
                ))}

                {/* Strategic Conclusion */}
                <section className="mt-12 pt-8 border-t-2 border-slate-800/50">
                  <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Intelligence Hub CTA */}
                    {article.relatedIntelligence && (
                      <Link
                        to="/intelligence"
                        className="group p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <FileText size={24} className="text-cyan-400" />
                          <h3 className="text-lg font-bold text-white">Custom Intelligence Report</h3>
                        </div>
                        <p className="text-sm text-slate-300 mb-4">
                          Get a professional market analysis tailored to your specific product or niche.
                        </p>
                        <div className="flex items-center space-x-2 text-cyan-400 font-semibold">
                          <span>Request Report</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    )}

                    {/* Services CTA */}
                    {article.relatedServices && article.relatedServices.length > 0 && (
                      <Link
                        to={`/services/${article.relatedServices[0]}`}
                        className="group p-6 glass rounded-xl hover:shadow-lg hover:border-cyan-500 transition-all"
                      >
                        <h3 className="text-lg font-bold text-white mb-3">Explore Our Services</h3>
                        <p className="text-sm text-slate-300 mb-4">
                          Professional implementation and ongoing optimization for your e-commerce business.
                        </p>
                        <div className="flex items-center space-x-2 text-slate-300 group-hover:text-cyan-400 font-semibold transition-colors">
                          <span>View Services</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    )}
                  </div>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Table of Contents */}
                  {tableOfContents.length > 0 && (
                    <nav className="p-6 glass rounded-xl">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                        {t('articles.tableOfContents')}
                      </h3>
                      <ul className="space-y-2">
                        {tableOfContents.map((item) => (
                          <li key={item.id}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors block py-1"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <div className="p-6 glass rounded-xl">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                        {t('articles.related')}
                      </h3>
                      <div className="space-y-4">
                        {relatedArticles.map((related) => (
                          <Link
                            key={related.slug}
                            to={`/blog/${related.slug}`}
                            className="block pb-4 border-b border-white/10 last:border-0 last:pb-0 group"
                          >
                            <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors mb-2">
                              {related.title}
                            </h4>
                            <div className="flex items-center space-x-2 text-xs text-slate-500">
                              <Clock size={12} />
                              <span>{related.readTime} min</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Intelligence Hub CTA */}
                  <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Need Expert Analysis?</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      Get custom market intelligence reports with structured data analysis.
                    </p>
                    <Link
                      to="/intelligence"
                      className="block w-full px-4 py-2 bg-cyan-600 text-white text-center font-semibold rounded-lg hover:bg-cyan-500 transition-colors text-sm"
                    >
                      View Intelligence Hub
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-16 px-6 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">{t('articles.related')}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <ArticleCard key={related.slug} article={related} layout="grid" />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
