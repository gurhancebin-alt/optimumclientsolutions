import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import ArticleCard from '../components/blog/ArticleCard';
import CategoryBadge from '../components/blog/CategoryBadge';
import BlogSidebar from '../components/blog/BlogSidebar';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  blogArticles, 
  blogCategories, 
  getArticlesByCategory, 
  searchArticles,
  getFeaturedArticles,
  getCategoryInfo
} from '../data/blog';
import { blogFAQ } from '../data/faq';

export default function Blog() {
  const { t } = useTranslation('blog');
  const { category: categoryParam } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  // Update displayed articles when category or search changes
  useEffect(() => {
    let articles = blogArticles;

    // Filter by category
    if (activeCategory !== 'all') {
      articles = getArticlesByCategory(activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      articles = searchArticles(searchQuery);
      if (activeCategory !== 'all') {
        articles = articles.filter(a => a.category === activeCategory);
      }
    }

    // Sort by publish date (newest first)
    articles = [...articles].sort((a, b) => 
      new Date(b.publishDate) - new Date(a.publishDate)
    );

    setDisplayedArticles(articles);
  }, [activeCategory, searchQuery]);

  // Update category from URL param
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search when changing category
    setSearchParams({}); // Clear URL params
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  const currentCategoryInfo = activeCategory !== 'all' 
    ? getCategoryInfo(activeCategory) 
    : null;

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta 
          name="description" 
          content={t('meta.description')} 
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-4 glass border-0 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-6 px-6 glass-nav sticky top-20 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide py-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-cyan-600 text-white'
                    : 'glass text-slate-300 hover:bg-white/10'
                }`}
              >
                {t('categories.all')} ({blogArticles.length})
              </button>
              {blogCategories.map((category) => {
                const articleCount = getArticlesByCategory(category.slug).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className="flex-shrink-0"
                  >
                    <CategoryBadge 
                      category={category} 
                      size="md" 
                      linked={false}
                    />
                    <span className="ml-2 text-sm text-slate-500">({articleCount})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {currentCategoryInfo && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {currentCategoryInfo.name}
                </h2>
                <p className="text-slate-400">{currentCategoryInfo.description}</p>
              </div>
            )}

            {searchQuery && (
              <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-sm text-slate-300">
                  Found <span className="font-bold text-cyan-400">{displayedArticles.length}</span> articles matching "{searchQuery}"
                  {activeCategory !== 'all' && ` in ${currentCategoryInfo?.name}`}
                  {displayedArticles.length > 0 && (
                    <button
                      onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                      className="ml-3 text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      {t('search.clearSearch')}
                    </button>
                  )}
                </p>
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Article Grid */}
              <div className="lg:col-span-2">
                {displayedArticles.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {displayedArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} layout="grid" />
                    ))}
                  </div>
                ) : (
                  /* Empty State */
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
                      <Search className="text-slate-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('search.noResults')}</h3>
                    <p className="text-slate-400 mb-6">
                      {t('search.noResults')}
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                        setSearchParams({});
                      }}
                      className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors"
                    >
                      {t('categories.all')}
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <BlogSidebar 
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                    popularArticles={getFeaturedArticles(5)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQAccordion
          faqs={blogFAQ}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          sectionId="faq"
          className="bg-slate-900/30"
        />
      </div>
    </>
  );
}
