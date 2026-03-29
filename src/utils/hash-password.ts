import { randomBytes, scrypt as scryptCallback } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const SALT_SIZE = 16;
const KEY_SIZE = 64;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_SIZE).toString("hex");
  const key = (await scrypt(password, salt, KEY_SIZE)) as Buffer;

  return `${salt}:${key.toString("hex")}`;
}
