'use client'

import { useEffect, useState } from "react"
import { DOWNLOAD_ROUTE_PATH, buildDownloadRouteWithUtm } from "@/lib/app-link"

export function useAppLink() {
  const [appLink, setAppLink] = useState(DOWNLOAD_ROUTE_PATH)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const params = new URLSearchParams(window.location.search)
      setAppLink(buildDownloadRouteWithUtm(params))
    } catch {
      // no-op – fallback stays as /download
    }
  }, [])

  return appLink
}
