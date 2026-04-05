import { LoginForm } from "@/components/auth/LoginForm";
import { UiLink } from "@/components/ui/UiLink";

type RegisterPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

export default async function LoginPage({ searchParams }: RegisterPageProps) {
  const { status } = await searchParams;

  return (
    <main className="py-8 md:py-10 mb-10">
      <section className="mx-auto w-full max-w-md space-y-4">
        {status === "success" ? (
          <p
            role="status"
            className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            Account created successfully. You can now sign in.
          </p>
        ) : null}
        <LoginForm />
        <p className="text-sm text-gray-500">
          Don&apos;t have an account yet?{" "}
          <UiLink href="/register">Create one</UiLink>
        </p>
      </section>
    </main>
  );
}
