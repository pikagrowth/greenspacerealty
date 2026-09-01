import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export function BlogBreadcrumbs({ title }: { title: string }) {
  return (
    <nav className="flex text-sm text-gray-500 dark:text-gray-400 mb-8 items-center flex-wrap gap-2">
      <Link href="/" className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors flex items-center gap-1">
        <Home size={14} />
        Home
      </Link>
      <ChevronRight size={14} className="flex-shrink-0" />
      <Link href="/blog" className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors">
        Blog
      </Link>
      <ChevronRight size={14} className="flex-shrink-0" />
      <span className="text-gray-900 dark:text-gray-100 font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">
        {title}
      </span>
    </nav>
  );
}