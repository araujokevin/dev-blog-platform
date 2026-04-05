import type { z } from "zod";

import type { registerSchema } from "@/utils/register-schema";

export type RegisterFieldErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type RegisterActionState = {
  fieldErrors: RegisterFieldErrors;
  globalMessage?: string;
};

type RegisterSchemaError = z.ZodError<z.infer<typeof registerSchema>>;

export function getRegisterFeedback(
  error: RegisterSchemaError,
): RegisterFieldErrors {
  const fieldErrors = error.flatten().fieldErrors;

  return {
    name: fieldErrors.name?.[0],
    email: fieldErrors.email?.[0],
    password: fieldErrors.password?.[0],
  };
}

export function getRegisterGlobalError(
  reason: "duplicated-email" | "unexpected-error",
) {
  if (reason === "duplicated-email") {
    return "This email is already registered.";
  }

  return "Something went wrong. Please try again.";
}
