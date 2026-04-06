import { scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const KEY_SIZE = 64;

export async function verifyPassword(
  password: string,
  storedHash: string,
): Promise<boolean> {
  const [salt, storedKey] = storedHash.split(":");

  if (!salt || !storedKey) {
    return false;
  }

  const derivedKey = (await scrypt(password, salt, KEY_SIZE)) as Buffer;
  const storedKeyBuffer = Buffer.from(storedKey, "hex");

  if (storedKeyBuffer.length !== derivedKey.length) {
    return false;
  }

  return timingSafeEqual(storedKeyBuffer, derivedKey);
}
