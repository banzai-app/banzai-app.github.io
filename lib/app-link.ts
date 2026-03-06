import { getFunnelEntryPath, getOrCreateLeadId } from "@/lib/funnel-context"

export const APP_LINK_BASE = "https://onelink.to/apfcdm"

export function buildAppLinkWithUtm(searchParams: URLSearchParams | null | undefined) {
  const url = new URL(APP_LINK_BASE)

  const utmSource = searchParams?.get("utm_source")
  const utmMedium = searchParams?.get("utm_medium")
  const utmCampaign = searchParams?.get("utm_campaign")
  const utmContent = searchParams?.get("utm_content")
  const utmTerm = searchParams?.get("utm_term")
  const gclid = searchParams?.get("gclid")
  const fbclid = searchParams?.get("fbclid")

  if (utmSource) url.searchParams.set("utm_source", utmSource)
  if (utmMedium) url.searchParams.set("utm_medium", utmMedium)
  if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign)
  if (utmContent) url.searchParams.set("utm_content", utmContent)
  if (utmTerm) url.searchParams.set("utm_term", utmTerm)
  if (gclid) url.searchParams.set("gclid", gclid)
  if (fbclid) url.searchParams.set("fbclid", fbclid)

  url.searchParams.set("lead_id", getOrCreateLeadId())
  url.searchParams.set("funnel_entry_path", getFunnelEntryPath())

  return url.toString()
}

