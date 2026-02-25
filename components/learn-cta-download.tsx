"use client"

import { Button } from "@/components/ui/button"
import { trackLearnClickDownload } from "@/lib/analytics"
import { useAppLink } from "@/hooks/use-app-link"

export function LearnCtaDownload({ slug }: { slug: string }) {
  const appLink = useAppLink()

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
