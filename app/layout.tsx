import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ? `https://${siteUrl}` : "http://localhost:3000"),
  title: "Marcílio Lemos — Desenvolvedor de Software",
  description:
    "Cada rolagem remove um véu. Uma travessia do Sol até onde o sistema acaba — sites, apps e a primeira rede social for tech do mundo. Trabalhos somente por aplicação.",
  openGraph: {
    title: "Marcílio Lemos — Desenvolvedor de Software",
    description:
      "Cada rolagem remove um véu. Trabalhos somente por aplicação.",
    images: ["/space/sol.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04050a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
