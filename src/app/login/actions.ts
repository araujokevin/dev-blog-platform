"use server";

import { userRepository } from "@/repositories/user";
import {
  getLoginFeedback,
  getLoginGlobalError,
  type LoginActionState,
} from "./get-login-feedback";
import { loginSchema } from "@/utils/login-schema";
import { verifyPassword } from "@/utils/verify-password";

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const parsedData = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedData.success) {
    return {
      fieldErrors: getLoginFeedback(parsedData.error),
      status: "error",
    };
  }

  const { email, password } = parsedData.data;

  try {
    const user = await userRepository.findCredentialsByEmail(email);

    if (!user) {
      return {
        fieldErrors: {},
        globalMessage: getLoginGlobalError("invalid-credentials"),
        status: "error",
      };
    }

    const isPasswordValid = await verifyPassword(password, user.passwordHash);

    if (!isPasswordValid) {
      return {
        fieldErrors: {},
        globalMessage: getLoginGlobalError("invalid-credentials"),
        status: "error",
      };
    }

    return {
      fieldErrors: {},
      globalMessage: "Login successful",
      status: "success",
    };
  } catch {
    return {
      fieldErrors: {},
      globalMessage: getLoginGlobalError("unexpected-error"),
      status: "error",
    };
  }
}
