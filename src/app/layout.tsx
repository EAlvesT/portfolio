import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { ThemeHandler } from "@/components/themeProvider";
import { InicializarToat } from "@/components/ui/toast";
import { AosIinit } from "@/components/aos/aos-init";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "Portfolio de Eduardo Alves",
  description: "Seja bem vindo ao meu portfolio de desenvolvimento web.",
  keywords: ["portfólio", "portfólio pessoal", "desenvolvedor web", "desenvolvimento web", "frontend", "backend", "fullstack", "Next.js", "React", "JavaScript", "TypeScript", "HTML", "CSS", "Sass", "Tailwind CSS", "UI", "UX", "projetos web", "programador", "desenvolvedor front-end", "desenvolvedor back-end", "landing page", "sites responsivos", "aplicações web", "frameworks JavaScript", "experiência profissional", "projetos pessoais", "currículo online", "desenvolvedor freelance", "portfólio de programador", "software engineer", "engenheiro de software", "web designer", "interface de usuário", "componentes reutilizáveis", "SEO", "tecnologias web", "portfólio moderno", "projetos Next.js", "open source", "portfólio interativo", "Eduardo Alves"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": "large",
    }
  },
  // metadataBase: new URL("https://meusite.com.br"),
  openGraph: {
    title: "Eduardo Alves",
    description: "Seja bem vindo ao meu portfolio de desenvolvimento web.",
    url: `${process.env.BASE_URL || "http://localhost:3000"}`,
    siteName: "Eduardo Alves",
    images: [
      {
        url: "https://res.cloudinary.com/dr3cwzamj/image/upload/v1753814049/fundo_oipjon.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Alves | Desenvolvedor Web",
      }
    ],
    locale: "pt-BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Alves | Desenvolvedor Web",
    description: "Seja bem vindo ao meu portfolio de desenvolvimento web.",
    // creator: "@seu_usuario_twitter",
    images: ["https://res.cloudinary.com/dr3cwzamj/image/upload/v1753814049/fundo_oipjon.png"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [
    { name: "Eduardo Alves", url: "https://meusite.com.br" },
  ],
  creator: "Eduardo Alves",
  publisher: "Eduardo Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <ThemeHandler />
        <InicializarToat />
        {children}
        <AosIinit />
      </body>
    </html>
  );
}