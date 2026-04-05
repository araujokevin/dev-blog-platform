"use client";

import { registerAction } from "@/app/register/actions";
import { RegisterActionState } from "@/app/register/get-register-feedback";
import { Button } from "@/components/ui/Button";
import { InputText } from "@/components/ui/InputText";
import { useActionState } from "react";
import { Loader2 } from "lucide-react";

const initialState: RegisterActionState = {
  fieldErrors: {},
};

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <section className="mx-auto mb-5 w-full max-w-md">
      <h1 className="mb-2 text-2xl font-semibold text-gray-700">
        Create account
      </h1>

      <p className="mb-6 text-sm text-gray-500">
        Fill in your details to start using the platform.
      </p>

      {state.globalMessage ? (
        <p className="mb-4 rounded border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {state.globalMessage}
        </p>
      ) : null}

      <form action={formAction} className="flex flex-col gap-4" noValidate>
        <InputText
          name="name"
          label="Full name"
          placeholder="Jane Doe"
          autoComplete="name"
          required
          disabled={isPending}
          error={state.fieldErrors.name}
        />

        <InputText
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          autoComplete="email"
          required
          disabled={isPending}
          error={state.fieldErrors.email}
        />

        <InputText
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="new-password"
          required
          disabled={isPending}
          error={state.fieldErrors.password}
        />

        <Button type="submit" className="mt-2 w-full" disabled={isPending}>
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating your account...
            </span>
          ) : (
            "Create account"
          )}
        </Button>
      </form>
    </section>
  );
}
