import { Helmet } from 'react-helmet-async';

export default function ArticleSchema({ article, category }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishDate,
    "dateModified": article.updatedDate || article.publishDate,
    "author": {
      "@type": "Organization",
      "name": article.author || "Optimum Client Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Optimum Client Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://optimumclientsolutions.com/images/logo/OCScolorlogotrans.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://optimumclientsolutions.com/blog/${article.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://optimumclientsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://optimumclientsolutions.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category?.name || "Article",
        "item": `https://optimumclientsolutions.com/blog/category/${category?.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": `https://optimumclientsolutions.com/blog/${article.slug}`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
