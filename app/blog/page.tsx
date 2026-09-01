import { getAllPosts } from "@/lib/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Real Estate Blog | 2 & 3 BHK Buying Guides for Old Panvel",
  description: "Expert guides on 2 BHK and 3 BHK flats in Old Panvel, Shravan Siddhant price lists, floor plans, and how NMIA & MTHL are reshaping Panvel real estate.",
  alternates: { canonical: "https://greenspacerealty.in/blog" },
  openGraph: {
    title: "Greenspace Realty Blog — Old Panvel Real Estate Guides",
    description: "2 BHK & 3 BHK buying guides, price trends and infrastructure updates for Old Panvel, Navi Mumbai.",
    url: "https://greenspacerealty.in/blog",
    siteName: "Greenspace Realty",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://greenspacerealty.in/blog/${post.slug}`
    }))
  };

  return (
    <div className="flex flex-col w-full bg-brand-bg dark:bg-brand-bgDark pb-24 transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="py-24 bg-white dark:bg-[#161917] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Insights" title="Old Panvel Real Estate Guides" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {posts.map(post => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>
    </div>
  );
}