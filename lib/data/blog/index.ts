import { BlogPost } from '@/lib/types';
import { post as twoVsThreeBhk } from './posts/2bhk-vs-3bhk-old-panvel';
import { post as shravanSiddhantPriceList } from './posts/shravan-siddhant-price-list-floor-plans-2026';
import { post as best2bhkUnder1Cr } from './posts/best-2bhk-flats-old-panvel-under-1-crore';
import { post as airportImpact } from './posts/navi-mumbai-airport-impact-old-panvel-prices';
import { post as railCorridor } from './posts/panvel-karjat-rail-corridor-old-panvel';

export const blogPosts: BlogPost[] = [
  twoVsThreeBhk,
  shravanSiddhantPriceList,
  best2bhkUnder1Cr,
  airportImpact,
  railCorridor,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export const getAllPosts = () => blogPosts;

export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) =>
  blogPosts.filter(p => p.slug !== slug).slice(0, limit);

export const getPostsByCategory = (category: string) =>
  blogPosts.filter(p => p.category === category);