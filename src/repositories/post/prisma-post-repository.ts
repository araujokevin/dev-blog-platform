import { PostModel } from "@/models/post/post-model";
import { prisma } from "@/lib/prisma";
import { PostRepository } from "./post-repository";

type PostWithAuthor = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string;
  };
};

export class PrismaPostRepository implements PostRepository {
  private mapToPostModel(post: PostWithAuthor): PostModel {
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImageUrl: post.coverImageUrl,
      published: post.published,
      createdAt: post.createdAt.toISOString(),
      updatedAt: post.updatedAt.toISOString(),
      author: post.author.name,
    };
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts.map((post) => this.mapToPostModel(post));
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return posts.map((post) => this.mapToPostModel(post));
  }

  async findById(id: string): Promise<PostModel> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post || !post.published)
      throw new Error("Post não encontrado para ID");

    return this.mapToPostModel(post);
  }

  async findBySlug(slug: string): Promise<PostModel> {
    const post = await prisma.post.findUnique({
      where: {
        slug,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!post || !post.published)
      throw new Error("Post não encontrado para slug");

    return this.mapToPostModel(post);
  }
}
