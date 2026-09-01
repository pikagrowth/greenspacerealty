import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BlogPost } from '@/lib/types';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-soft">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col h-full bg-white dark:bg-[#161917] transition-colors duration-300">
          <div className="mb-4">
            <Badge variant="accent">{post.category}</Badge>
          </div>
          <h3 className="font-heading text-xl text-brand-primary dark:text-brand-primaryDark mb-3 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-auto border-t border-gray-100 dark:border-gray-800 pt-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTimeMinutes} min read
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}