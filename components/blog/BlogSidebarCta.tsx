import Link from 'next/link';
import { BlogPost } from '@/lib/types';

export function BlogSidebarCta({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Enquiry CTA Block */}
      <div className="bg-brand-primary dark:bg-[#111] rounded-2xl p-6 text-white shadow-soft">
        <h3 className="text-xl font-heading mb-3">Book a Free Site Visit</h3>
        <p className="text-white/80 text-sm mb-6">
          Explore Shravan Siddhant's premium 2 & 3 BHK residences in Old Panvel.
        </p>
        <Link 
          href="/contact#enquire"
          className="block w-full py-3 px-4 bg-white text-brand-primary dark:bg-brand-accent dark:text-white text-center font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-brand-accent/90 transition-colors"
        >
          Schedule Visit
        </Link>
      </div>

      {/* Related Posts Block */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div>
          <h3 className="text-lg font-heading text-brand-primary dark:text-brand-primaryDark mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
            Related Reads
          </h3>
          <div className="flex flex-col gap-4">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="flex gap-4 items-center">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={post.coverImage} 
                      alt={post.coverImageAlt} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{post.readTimeMinutes} min read</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}