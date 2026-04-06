import { loginSchema } from "@/utils/login-schema";
import type { z } from "zod";

export type LoginFieldErrors = {
  email?: string;
  password?: string;
};

export type LoginActionState = {
  fieldErrors: LoginFieldErrors;
  globalMessage?: string;
  status?: "success" | "error";
};

type LoginSchemaError = z.ZodError<z.infer<typeof loginSchema>>;

export function getLoginFeedback(error: LoginSchemaError): LoginFieldErrors {
  const fieldErrors = error.flatten().fieldErrors;

  return {
    email: fieldErrors.email?.[0],
    password: fieldErrors.password?.[0],
  };
}

export function getLoginGlobalError(
  reason: "invalid-credentials" | "unexpected-error",
): string {
  if (reason === "invalid-credentials") {
    return "Invalid email or password.";
  }

  return "Something went wrong. Please try again.";
}
