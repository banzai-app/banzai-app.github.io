export type FunnelEntryPath = "app_first" | "whatsapp_first"

const STORAGE_KEYS = {
  leadId: "banzai_lead_id",
  funnelEntryPath: "banzai_funnel_entry_path",
} as const

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
}

function getSearchParams(): URLSearchParams | null {
  if (typeof window === "undefined") return null
  return new URLSearchParams(window.location.search)
}

export function getOrCreateLeadId(): string {
  if (typeof window === "undefined") return "server"

  const fromQuery = getSearchParams()?.get("lead_id")
  if (fromQuery) {
    localStorage.setItem(STORAGE_KEYS.leadId, fromQuery)
    return fromQuery
  }

  const existing = localStorage.getItem(STORAGE_KEYS.leadId)
  if (existing) return existing

  const created = randomId()
  localStorage.setItem(STORAGE_KEYS.leadId, created)
  return created
}

export function setFunnelEntryPath(path: FunnelEntryPath) {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEYS.funnelEntryPath, path)
}

export function getFunnelEntryPath(): FunnelEntryPath | "unknown" {
  if (typeof window === "undefined") return "unknown"
  const value = localStorage.getItem(STORAGE_KEYS.funnelEntryPath)
  if (value === "app_first" || value === "whatsapp_first") {
    return value
  }
  return "unknown"
}

export function getAcquisitionParams() {
  const params = getSearchParams()

  return {
    utm_source: params?.get("utm_source") ?? undefined,
    utm_medium: params?.get("utm_medium") ?? undefined,
    utm_campaign: params?.get("utm_campaign") ?? undefined,
    utm_content: params?.get("utm_content") ?? undefined,
    utm_term: params?.get("utm_term") ?? undefined,
    gclid: params?.get("gclid") ?? undefined,
    fbclid: params?.get("fbclid") ?? undefined,
  }
}
