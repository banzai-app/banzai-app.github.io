const APP_LINK_BASE = "https://onelink.to/apfcdm"

export function buildAppLinkWithUtm(searchParams: any) {
  if (!searchParams || typeof searchParams.get !== "function") {
    return APP_LINK_BASE
  }

  const utmSource = searchParams.get("utm_source")
  const utmCampaign = searchParams.get("utm_campaign")
  const utmContent = searchParams.get("utm_content")

  if (!utmSource && !utmCampaign && !utmContent) {
    return APP_LINK_BASE
  }

  const url = new URL(APP_LINK_BASE)
  if (utmSource) url.searchParams.set("utm_source", utmSource)
  if (utmCampaign) url.searchParams.set("utm_campaign", utmCampaign)
  if (utmContent) url.searchParams.set("utm_content", utmContent)

  return url.toString()
}

