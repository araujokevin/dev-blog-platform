import { PrismaUserRepository } from "./prisma-user-repository";
import { UserRepository } from "./user-repository";

export const userRepository: UserRepository = new PrismaUserRepository();
