'use client';

import { siteConfig } from '@/config/site';
import { BlogPost } from '@/data/blog-posts';

interface BlogPostSchemaProps {
  post: BlogPost;
}

export default function BlogPostSchema({ post }: BlogPostSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": siteConfig.author.name,
      "jobTitle": siteConfig.author.title,
      "url": siteConfig.author.linkedin,
      "sameAs": [
        siteConfig.author.linkedin,
        siteConfig.social.linkedin
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": `https://${siteConfig.domain}`,
      "logo": {
        "@type": "ImageObject",
        "url": `https://${siteConfig.domain}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://${siteConfig.domain}/blog/${post.slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://${siteConfig.domain}/og-image.jpg`,
      "width": 1200,
      "height": 630
    },
    "articleSection": "AI Act Compliance",
    "keywords": [
      "AI Act",
      "EU AI Act",
      "AI compliance",
      "high-risk AI systems",
      "AI regulation"
    ],
    "wordCount": post.content.split(/\s+/).length,
    "timeRequired": post.readTime,
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${siteConfig.domain}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `https://${siteConfig.domain}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://${siteConfig.domain}/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
