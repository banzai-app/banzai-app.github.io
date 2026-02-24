import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Em poucos passos, você transforma transações em clareza semanal.",
  openGraph: {
    title: "Como funciona | Banzai",
    description:
      "Em poucos passos, você transforma transações em clareza semanal.",
  },
}

export default function ComoFuncionaLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}
