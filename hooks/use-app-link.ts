'use client'

import { useEffect, useState } from "react"
import {
  DOWNLOAD_ROUTE_PATH,
  buildDownloadRouteWithUtm,
  buildStoreLinksWithAttribution,
} from "@/lib/app-link"

export function useAppLink() {
  const [appLink, setAppLink] = useState(DOWNLOAD_ROUTE_PATH)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const params = new URLSearchParams(window.location.search)
      const links = buildStoreLinksWithAttribution(params)
      const userAgent = window.navigator.userAgent
      const isAndroid = /android/i.test(userAgent)
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent)

      if (isAndroid) {
        setAppLink(links.android)
        return
      }

      if (isIOS) {
        setAppLink(links.ios)
        return
      }

      // Desktop segue para /download (QR code + fallback).
      setAppLink(buildDownloadRouteWithUtm(params))
    } catch {
      // no-op – fallback stays as /download
    }
  }, [])

  return appLink
}
