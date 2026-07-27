import postsData from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO (YYYY-MM-DD)
  author: string;
  category: string;
  excerpt: string;
  html: string; // full migrated post body (HTML)
  image?: string; // featured image
  imageAlt?: string;
  featured?: boolean;
};

export const posts: Post[] = postsData as Post[];

export const postsByDate = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const blogSlugs = posts.map((p) => p.slug);
