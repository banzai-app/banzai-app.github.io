"use client"

import { Button } from "@/components/ui/button"
import { trackLearnClickDownload } from "@/lib/analytics"

const APP_LINK = "https://onelink.to/apfcdm"

export function LearnCtaDownload({ slug }: { slug: string }) {
  return (
    <a
      href={APP_LINK}
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
