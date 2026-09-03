import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greenspacerealty.in';

  // Generate dynamic URLs for all active blog posts
  const blogUrls = getAllPosts().map((post) => {
    // Elevate Shravan Siddhant cluster posts above generic articles
    const isShravanSiddhantCluster = 
      post.slug.includes('shravan-siddhant') || 
      post.relatedProjectSlug === 'shravan-siddhant';

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: (isShravanSiddhantCluster ? 'weekly' : 'monthly') as const,
      priority: isShravanSiddhantCluster ? 0.85 : 0.7,
    };
  });

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      // Primary Target Page: Match root priority for maximum crawl weight
      url: `${baseUrl}/projects/shravan-siddhant`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      // Gallery page: Critical for architectural plan and elevation image indexing
      url: `${baseUrl}/projects/shravan-siddhant/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner-with-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Spread all dynamically generated blog post URLs
    ...blogUrls,
  ];
}