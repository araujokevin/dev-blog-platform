import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

type SeedPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
};

type SeedData = {
  posts: SeedPost[];
};

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

function normalizeNameAsEmail(name: string): string {
  return `${name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/^\.|\.$/g, "")}@example.com`;
}

async function main() {
  const postsJsonPath = resolve(
    process.cwd(),
    "src",
    "db",
    "seed",
    "posts.json",
  );
  const file = await readFile(postsJsonPath, "utf-8");
  const data = JSON.parse(file) as SeedData;

  for (const post of data.posts) {
    const authorEmail = normalizeNameAsEmail(post.author);

    const author = await prisma.user.upsert({
      where: { email: authorEmail },
      update: { name: post.author },
      create: {
        name: post.author,
        email: authorEmail,
        passwordHash: "seed-password-not-used",
      },
    });

    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        coverImageUrl: post.coverImageUrl,
        published: post.published,
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
        authorId: author.id,
      },
      create: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImageUrl: post.coverImageUrl,
        published: post.published,
        createdAt: new Date(post.createdAt),
        updatedAt: new Date(post.updatedAt),
        authorId: author.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
