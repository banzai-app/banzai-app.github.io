"use client"

import { Button } from "@/components/ui/button"
import { trackLearnClickDownload } from "@/lib/analytics"
import { useSearchParams } from "next/navigation"
import { buildAppLinkWithUtm } from "@/lib/app-link"

export function LearnCtaDownload({ slug }: { slug: string }) {
  const searchParams = useSearchParams()
  const appLink = buildAppLinkWithUtm(searchParams)

  return (
    <a
      href={appLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLearnClickDownload(slug)}
    >
      <Button
        size="lg"
        className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        Baixar o app
      </Button>
    </a>
  )
}
