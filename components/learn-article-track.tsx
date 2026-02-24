"use client"

import { useEffect } from "react"
import { trackLearnOpenArticle } from "@/lib/analytics"

export function LearnArticleTrack({ slug }: { slug: string }) {
  useEffect(() => {
    trackLearnOpenArticle(slug)
  }, [slug])
  return null
}
