import { Button } from "@/components/ui/Button";
import { InputText } from "@/components/ui/InputText";

export function LoginForm() {
  return (
    <section className="mx-auto w-full max-w-md">
      <h1 className="mb-2 text-2xl font-semibold text-gray-800">Sign in</h1>
      <p className="mb-6 text-sm text-gray-500">
        Enter your credentials to access your account.
      </p>

      <form className="flex flex-col gap-4">
        <InputText
          name="email"
          type="email"
          label="Email"
          placeholder="jane@example.com"
          autoComplete="email"
          required
        />

        <InputText
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        <Button type="submit" className="mt-2 w-full">
          Sign in
        </Button>
      </form>
    </section>
  );
}
