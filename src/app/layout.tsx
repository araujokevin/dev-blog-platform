import type { Metadata } from "next";

import { Montserrat } from "next/font/google";

import "./globals.css";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - Esté um blog com Next.js",
    template: "%s | The blog",
  },
  description: "Essa seria a descrição dessa página",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body>
        <Container>
          <Header />

          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
