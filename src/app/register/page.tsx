import { RegisterForm } from "@/components/auth/RegisterForm";
import { UiLink } from "@/components/ui/UiLink";

export default function RegisterPage() {
  return (
    <main className="py-8 md:py-10 mb-10">
      <section className="mx-auto w-full max-w-md space-y-4">
        <RegisterForm />
        <p className="text-sm text-gray-500">
          Already have an account? <UiLink href="/login">Log in</UiLink>
        </p>
      </section>
    </main>
  );
}
