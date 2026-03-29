import { Button } from "@/components/ui/Button";
import { InputText } from "@/components/ui/InputText";

export function RegisterForm() {
  return (
    <section className="mx-auto w-full max-w-md mb-12">
      <h1 className="mb-2 text-2xl font-semibold text-gray-700">
        Create account
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        Fill in your details to start using the platform.
      </p>

      <form className="flex flex-col gap-4">
        <InputText
          name="name"
          label="Full name"
          placeholder="Jane Doe"
          autoComplete="name"
          required
        />

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
          autoComplete="new-password"
          required
        />

        <Button type="submit" className="mt-2 w-full">
          Create account
        </Button>
      </form>
    </section>
  );
}
