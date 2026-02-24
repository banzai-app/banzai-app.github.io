import Link from "next/link"
import {
  FEATURED_ARTICLES,
  LEARN_ARTICLES,
} from "@/lib/learn-articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Conteúdo prático para ganhar clareza e criar hábitos financeiros simples.",
  openGraph: {
    title: "Learn | Banzai",
    description:
      "Conteúdo prático para ganhar clareza e criar hábitos financeiros simples.",
  },
}

export default function LearnPage() {
  const others = LEARN_ARTICLES.filter((a) => !a.featured)

  return (
    <div className="min-h-screen">
      <section className="pt-14 sm:pt-16 pb-8 sm:pb-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Learn
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Conteúdo prático para ganhar clareza e criar hábitos financeiros
            simples.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
            Comece por aqui
          </h2>
          <ul className="space-y-3 mb-10">
            {FEATURED_ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}/`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{a.title}</span>
                  <p className="text-sm text-gray-600 mt-1">{a.summary}</p>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-lg font-semibold text-gray-900 mb-4">
            Mais artigos
          </h2>
          <ul className="space-y-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/learn/${a.slug}/`}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{a.title}</span>
                  <p className="text-sm text-gray-600 mt-1">{a.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
