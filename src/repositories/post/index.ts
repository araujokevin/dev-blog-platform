import { PrismaPostRepository } from "./prisma-post-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new PrismaPostRepository();
