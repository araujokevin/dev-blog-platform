import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  // Non-public (admin / interno)
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlug(slug: string): Promise<PostModel>;

  // Public (somente posts publicados)
  findAllPublic(): Promise<PostModel[]>;
  findPublicById(id: string): Promise<PostModel>;
  findPublicBySlug(slug: string): Promise<PostModel>;
}
