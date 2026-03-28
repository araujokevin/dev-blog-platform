export type PostModel = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
};
