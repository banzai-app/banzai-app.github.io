/**
 * Analytics events conforme PRD – uso apenas no client (window.gtag).
 */

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

export function trackCtaClickDownload(params: {
  page: string
  placement: string
}) {
  if (typeof window !== "undefined" && window.gtag) {
    // Evento novo, detalhado por página/posição/dispositivo
    window.gtag("event", "cta_click_download", {
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })

    // Evento legado usado nas campanhas de Ads (já configurado)
    window.gtag("event", "conversion_event_signup", {
      event_category: "CTA Download",
      event_label: `${params.page}_${params.placement}`,
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })
  }
}

export function trackCtaClickDownloadApp(params: {
  page: string
  placement: string
}) {
  trackCtaClickDownload(params)

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_download_app", {
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })
  }
}

export function trackCtaClickDownloadAppRedirect(params: {
  page: string
  placement: string
}) {
  trackCtaClickDownload(params)

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_download_app_redirect", {
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })
  }
}

export function trackCtaClickDownloadWhatsApp(params: {
  page: string
  placement: string
}) {
  trackCtaClickDownload(params)

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_download_whatsapp", {
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })
  }
}

export function trackCtaClickHowItWorks(params: {
  page: string
  placement: string
}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click_how_it_works", {
      page: params.page,
      placement: params.placement,
      device: getDevice(),
    })
  }
}

export function trackNavClick(label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "nav_click", { label })
  }
}

export function trackFaqExpandQuestion(questionId: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "faq_expand_question", { question_id: questionId })
  }
}

export function trackLearnOpenArticle(slug: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "learn_open_article", { slug })
  }
}

export function trackLearnClickDownload(slug: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "learn_click_download", { slug })
  }
}
