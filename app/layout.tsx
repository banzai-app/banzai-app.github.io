import type React from "react"
import type { Metadata } from "next"
import { Inria_Serif, Space_Grotesk, Roboto } from "next/font/google"
import { HeaderNav } from "@/components/header-nav"
import { FooterNav } from "@/components/footer-nav"
import { SchemaOrg } from "@/components/schema-org"
import "./globals.css"

const inriaSerif = Inria_Serif({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-inria-serif",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const SITE_URL = "https://banzai.money"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Banzai - Seu dinheiro, explicado",
    template: "%s | Banzai",
  },
  description:
    "Conecte via Open Finance e entenda o que está acontecendo com seu dinheiro. A Banzai fornece evidências claras de cobranças recorrentes, custos e sinais de atenção.",
  keywords: ["finanças pessoais", "Open Finance", "análise financeira", "recorrências", "Banzai"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Banzai",
    images: [
      {
        url: "/banzai_logo.png",
        width: 1200,
        height: 1200,
        alt: "Banzai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/banzai_logo.png"],
  },
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
        <SchemaOrg />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z0ETNCSVGG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z0ETNCSVGG');
            `,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inriaSerif.variable} ${roboto.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <HeaderNav />
        <main className="flex-1 flex flex-col">{children}</main>
        <FooterNav />
      </body>
    </html>
  )
}
