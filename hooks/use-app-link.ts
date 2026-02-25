'use client'

import { useEffect, useState } from "react"
import { APP_LINK_BASE, buildAppLinkWithUtm } from "@/lib/app-link"

export function useAppLink() {
  const [appLink, setAppLink] = useState(APP_LINK_BASE)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const params = new URLSearchParams(window.location.search)
      setAppLink(buildAppLinkWithUtm(params))
    } catch {
      // no-op – fallback stays as APP_LINK_BASE
    }
  }, [])

  return appLink
}

