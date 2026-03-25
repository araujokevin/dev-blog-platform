import Link from "next/link";
import { FileSearch } from "lucide-react";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function NotFound() {
  return (
    <ErrorMessage
      icon={FileSearch}
      title="Página não encontrada"
      description="A página que você tentou acessar não existe, foi removida ou o link está incorreto."
      action={
        <Link
          href="/"
          className="inline-flex rounded-lg bg-green-700/80 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800/80"
        >
          Voltar para a página inicial
        </Link>
      }
    />
  );
}
