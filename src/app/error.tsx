"use client";

import ErrorMessage from "@/components/ui/ErrorMessage";
import Link from "next/link";
import { CircleAlertIcon } from "lucide-react";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      icon={CircleAlertIcon}
      title="Error 501"
      description="Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde."
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
