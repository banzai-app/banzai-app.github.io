import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preços",
  description:
    "Comece grátis. Todas as funcionalidades disponíveis no app são gratuitas.",
  openGraph: {
    title: "Preços | Banzai",
    description:
      "Comece grátis. Todas as funcionalidades disponíveis no app são gratuitas.",
  },
}

export default function PrecosLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
