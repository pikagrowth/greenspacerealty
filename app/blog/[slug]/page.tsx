import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { BlogSidebarCta } from "@/components/blog/BlogSidebarCta";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
// import { Accordion } from "@/components/ui/Accordion"; // Assuming this exists per spec

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found | Greenspace Realty" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical: `https://greenspacerealty.in/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://greenspacerealty.in/blog/${post.slug}`,
      images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.coverImageAlt }],
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.metaDescription, images: [post.coverImage] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.coverImage,
    "datePublished": post.publishedAt,
    "author": { "@type": "Organization", "name": post.author },
    "publisher": { "@type": "Organization", "name": "Greenspace Realty", "logo": { "@type": "ImageObject", "url": "https://greenspacerealty.in/logo.png" } }
  };

  const faqSchema = post.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  } : null;

  return (
    <article className="w-full bg-brand-bg dark:bg-brand-bgDark transition-colors duration-300 min-h-screen pb-24 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogBreadcrumbs title={post.title} />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-heading text-brand-primary dark:text-brand-primaryDark leading-tight mb-6">{post.title}</h1>
              <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden mb-8 shadow-soft">
                <img src={post.coverImage} alt={post.coverImageAlt} className="w-full h-full object-cover" />
              </div>
            </header>
            
            <BlogContentRenderer blocks={post.content} />
            
            {/* Insert FAQ Accordion here if post.faqs exists */}
          </div>
          
          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <BlogSidebarCta relatedPosts={related} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}