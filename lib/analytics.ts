/**
 * Analytics events conforme PRD – uso apenas no client (window.gtag).
 */

import {
  getAcquisitionParams,
  getFunnelEntryPath,
  getOrCreateLeadId,
  setFunnelEntryPath,
} from "@/lib/funnel-context"

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

function getDevice(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop"
  return window.innerWidth < 768 ? "mobile" : "desktop"
}

function getAppPlatform(): "ios" | "android" | "desktop" {
  if (typeof window === "undefined") return "desktop"
  const userAgent = window.navigator.userAgent
  if (/android/i.test(userAgent)) return "android"
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "ios"
  return "desktop"
}

function trackPlatformDownloadEvent(params: { page: string; placement: string }) {
  const platform = getAppPlatform()

  if (platform === "ios") {
    sendEvent("cta_click_download_app_ios", {
      page: params.page,
      placement: params.placement,
    })
  }

  if (platform === "android") {
    sendEvent("cta_click_download_app_android", {
      page: params.page,
      placement: params.placement,
    })
  }
}

function baseParams(extra?: Record<string, unknown>) {
  return {
    lead_id: getOrCreateLeadId(),
    funnel_entry_path: getFunnelEntryPath(),
    device: getDevice(),
    ...getAcquisitionParams(),
    ...extra,
  }
}

function sendEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) {
    return
  }

  window.gtag("event", eventName, baseParams(params))
}

export function trackCtaClickDownload(params: {
  page: string
  placement: string
}) {
  sendEvent("download_click", {
    page: params.page,
    placement: params.placement,
  })

  // Compatibilidade com eventos já existentes em dashboards/campanhas
  sendEvent("cta_click_download", {
    page: params.page,
    placement: params.placement,
  })

  sendEvent("conversion_event_signup", {
    event_category: "CTA Download",
    event_label: `${params.page}_${params.placement}`,
    page: params.page,
    placement: params.placement,
  })
}

export function trackCtaClickDownloadApp(params: {
  page: string
  placement: string
}) {
  setFunnelEntryPath("app_first")
  trackCtaClickDownload(params)

  sendEvent("cta_click_download_app", {
    page: params.page,
    placement: params.placement,
  })

  trackPlatformDownloadEvent(params)
}

export function trackCtaClickDownloadAppRedirect(params: {
  page: string
  placement: string
}) {
  setFunnelEntryPath("app_first")
  trackCtaClickDownload(params)

  sendEvent("cta_click_download_app_redirect", {
    page: params.page,
    placement: params.placement,
  })

  trackPlatformDownloadEvent(params)
}

export function trackCtaClickDownloadWhatsApp(params: {
  page: string
  placement: string
}) {
  setFunnelEntryPath("whatsapp_first")

  sendEvent("whatsapp_click", {
    page: params.page,
    placement: params.placement,
  })

  trackCtaClickDownload(params)

  sendEvent("cta_click_download_whatsapp", {
    page: params.page,
    placement: params.placement,
  })
}

export function trackCtaClickHowItWorks(params: {
  page: string
  placement: string
}) {
  sendEvent("cta_click_how_it_works", {
    page: params.page,
    placement: params.placement,
  })
}

export function trackWhatsAppConversationStarted(source: string) {
  setFunnelEntryPath("whatsapp_first")
  sendEvent("whatsapp_conversation_started", { source })
}

export function trackWhatsAppConnectionPageViewed(source: string) {
  setFunnelEntryPath("whatsapp_first")
  sendEvent("whatsapp_connection_page_viewed", { source })
}

export function trackWebFormSubmitted(status: "success" | "error") {
  setFunnelEntryPath("whatsapp_first")
  sendEvent("web_form_submitted", { status })
}

export function trackAccountConnected(connectionMethod: "web_link" | "app") {
  sendEvent("account_connected", { connection_method: connectionMethod })
}

export function trackFirstInsightReceived(source: "whatsapp" | "app") {
  sendEvent("first_insight_received", { source })
}

export function trackNavClick(label: string) {
  sendEvent("nav_click", { label })
}

export function trackFaqExpandQuestion(questionId: string) {
  sendEvent("faq_expand_question", { question_id: questionId })
}

export function trackLearnOpenArticle(slug: string) {
  sendEvent("learn_open_article", { slug })
}

export function trackLearnClickDownload(slug: string) {
  sendEvent("learn_click_download", { slug })
}
