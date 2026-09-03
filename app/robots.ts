import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://greenspacerealty.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og/'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        // Explicitly welcome Generative AI & Answer Engine crawlers
        userAgent: [
          'GPTBot',
          'PerplexityBot',
          'Google-Extended',
          'ClaudeBot',
          'Applebot-Extended',
          'Bytespider',
        ],
        allow: ['/', '/llm.txt', '/ai.txt', '/projects/shravan-siddhant'],
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}