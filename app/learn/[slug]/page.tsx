import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getArticle, ALL_SLUGS } from "@/lib/learn-articles"
import { LearnArticleTrack } from "@/components/learn-article-track"
import { LearnCtaDownload } from "@/components/learn-cta-download"
import { SchemaBlogPosting } from "@/components/schema-blog-posting"
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Banzai Learn`,
      description: article.summary,
    },
  }
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen">
      <SchemaBlogPosting
        slug={slug}
        title={article.title}
        description={article.summary}
      />
      <LearnArticleTrack slug={slug} />

      <article className="pt-14 sm:pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            href="/learn/"
            className="text-sm text-gray-600 hover:text-gray-900 mb-6 inline-block"
          >
            ← Voltar ao Learn
          </Link>
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-600 text-base mb-8">{article.summary}</p>
          <div className="prose prose-gray max-w-none">{article.body}</div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              Quer aplicar isso sem planilha? Baixe a Banzai e acompanhe por
              semana.
            </p>
            <LearnCtaDownload slug={slug} />
          </div>
        </div>
      </article>
    </div>
  )
}
