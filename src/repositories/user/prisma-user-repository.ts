import { prisma } from "@/lib/prisma";
import {
  CreateUserInput,
  UserCredentialsModel,
  UserRepository,
} from "./user-repository";

export class PrismaUserRepository implements UserRepository {
  async findCredentialsByEmail(
    email: string,
  ): Promise<UserCredentialsModel | null> {
    return prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        passwordHash: true,
      },
    });
  }

  async create(input: CreateUserInput): Promise<void> {
    await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        passwordHash: input.passwordHash,
      },
    });
  }
}
