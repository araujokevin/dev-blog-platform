import { postRepository } from "@/repositories/post";
import { notFound } from "next/navigation";
import { cache } from "react";

const findAllPublicPosts = cache(
  async () => await postRepository.findAllPublic(),
);
const findPostBySlug = cache(
  async (slug: string) => await postRepository.findBySlug(slug),
);

const findPostById = cache(
  async (id: string) => await postRepository.findById(id),
);

export const findAllPublicPostsCached = findAllPublicPosts;

export const findPostsBySlugCached = cache(async (slug: string) => {
  const post = await findPostBySlug(slug).catch(() => undefined);
  if (!post) notFound();
  return post;
});

export const findPostsByIdCached = findPostById;
