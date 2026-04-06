"use server";

import { hashPassword } from "@/utils/hash-password";
import { registerSchema } from "@/utils/register-schema";
import { redirect } from "next/navigation";

import {
  getRegisterFeedback,
  getRegisterGlobalError,
  type RegisterActionState,
} from "./get-register-feedback";
import { userRepository } from "@/repositories/user";

export async function registerAction(
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const parsedData = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedData.success) {
    return {
      fieldErrors: getRegisterFeedback(parsedData.error),
    };
  }

  const { name, email, password } = parsedData.data;

  try {
    const existingUser = await userRepository.findCredentialsByEmail(email);

    if (existingUser) {
      return {
        fieldErrors: {},
        globalMessage: getRegisterGlobalError("duplicated-email"),
      };
    }

    const passwordHash = await hashPassword(password);

    await userRepository.create({
      name,
      email,
      passwordHash,
    });
  } catch {
    return {
      fieldErrors: {},
      globalMessage: getRegisterGlobalError("unexpected-error"),
    };
  }

  redirect("/login?status=success");
}
