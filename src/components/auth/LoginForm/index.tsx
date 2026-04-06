"use client";

import { loginAction } from "@/app/login/actions";
import type { LoginActionState } from "@/app/login/get-login-feedback";
import { Button } from "@/components/ui/Button";
import { InputText } from "@/components/ui/InputText";
import clsx from "clsx";
import { useActionState } from "react";

const initialState: LoginActionState = {
  fieldErrors: {},
};

const GLOBAL_MESSAGE_STATUS_CLASSES = {
  success: "border-green-200 bg-green-50 text-green-700",
  error: "border-red-200 bg-red-50 text-red-600",
};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <section className="mx-auto w-full max-w-md">
      <h1 className="mb-2 text-2xl font-semibold text-gray-800">Sign in</h1>

      <p className="mb-6 text-sm text-gray-500">
        Enter your credentials to access your account.
      </p>

      {state.globalMessage ? (
        <p
          role="alert"
          aria-live="polite"
          className={clsx(
            "mb-4 rounded border px-4 py-3 text-sm",
            state.status === "success"
              ? GLOBAL_MESSAGE_STATUS_CLASSES.success
              : GLOBAL_MESSAGE_STATUS_CLASSES.error,
          )}
        >
          {state.globalMessage}
        </p>
      ) : null}

      <form action={formAction} className="flex flex-col gap-4" noValidate>
        <InputText
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          autoComplete="email"
          required
          error={state.fieldErrors.email}
          disabled={isPending}
        />

        <InputText
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
          error={state.fieldErrors.password}
          disabled={isPending}
        />

        <Button type="submit" className="mt-2 w-full" disabled={isPending}>
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </section>
  );
}
