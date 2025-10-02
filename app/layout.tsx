import type React from "react"
import type { Metadata } from "next"
import { Inria_Serif, Roboto } from "next/font/google"
import "./globals.css"

const inriaSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-serif",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Banzai - Seu Copiloto de IA para Gestão Financeira",
  description:
    "Aprofunde onde está indo o seu dinheiro. Banzai é uma poderosa ferramenta de IA para te mostrar tudo e gerar insights sobre suas finanças.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/banzai_logo_black.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/banzai_logo_black.png", sizes: "180x180", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BRT88BC1EZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BRT88BC1EZ');
            `,
          }}
        />
      </head>
      <body className={`${roboto.variable} ${inriaSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
