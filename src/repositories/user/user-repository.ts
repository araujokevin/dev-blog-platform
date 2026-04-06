export type UserCredentialsModel = {
  id: string;
  email: string;
  passwordHash: string;
};

export type CreateUserInput = {
  name: string;
  email: string;
  passwordHash: string;
};

export interface UserRepository {
  findCredentialsByEmail(email: string): Promise<UserCredentialsModel | null>;
  create(input: CreateUserInput): Promise<void>;
}
