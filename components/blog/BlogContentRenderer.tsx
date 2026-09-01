import Image from 'next/image';
import Link from 'next/link';
import { BlogBlock } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function BlogContentRenderer({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed font-body">{block.text}</p>;
          case 'heading':
            const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
              <HeadingTag 
                key={idx} 
                id={block.id} 
                className={`font-heading text-brand-primary dark:text-brand-primaryDark mt-8 mb-4 ${block.level === 2 ? 'text-3xl' : 'text-2xl'}`}
              >
                {block.text}
              </HeadingTag>
            );
          case 'list':
            const ListTag = block.style === 'bullet' ? 'ul' : 'ol';
            return (
              <ListTag key={idx} className={`pl-6 space-y-3 my-4 text-gray-700 dark:text-gray-300 ${block.style === 'bullet' ? 'list-none' : 'list-decimal'}`}>
                {block.items.map((item, i) => (
                  <li key={i} className="relative">
                    {block.style === 'bullet' && <span className="absolute left(-5) top-2 w-1.5 h-1.5 rounded-full bg-brand-accent"></span>}
                    {item}
                  </li>
                ))}
              </ListTag>
            );
          case 'stat':
            return (
              <Card key={idx} className="p-6 my-6 bg-brand-bg dark:bg-brand-bgDark border-l-4 border-brand-accent shadow-soft">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">{block.label}</div>
                <div className="text-3xl font-heading text-brand-primary dark:text-brand-primaryDark">{block.value}</div>
                {block.note && <div className="text-sm text-gray-500 mt-2">{block.note}</div>}
              </Card>
            );
          case 'image':
            return (
              <figure key={idx} className="my-8">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-soft">
                  <Image src={block.src} alt={block.alt} fill className="object-cover" />
                </div>
                {block.caption && <figcaption className="text-center text-sm text-gray-500 mt-3">{block.caption}</figcaption>}
              </figure>
            );
          case 'quote':
            return (
              <blockquote key={idx} className="my-8 p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl">
                <p className="text-lg italic text-brand-primary dark:text-brand-primaryDark mb-2 font-heading">"{block.text}"</p>
                {block.attribution && <footer className="text-sm font-semibold text-brand-accent">— {block.attribution}</footer>}
              </blockquote>
            );
          case 'cta':
            return (
              <Card key={idx} className="p-8 my-8 bg-brand-primary dark:bg-[#111] text-white shadow-soft rounded-2xl text-center">
                <h3 className="text-2xl font-heading mb-3">{block.heading}</h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">{block.body}</p>
                <Button asChild variant="accent" size="lg">
                  <Link href={block.href}>{block.buttonLabel}</Link>
                </Button>
              </Card>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}