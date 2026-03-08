export const DOWNLOAD_ROUTE_PATH = "/download"
export const IOS_STORE_BASE_URL = "https://apps.apple.com/br/app/banzai/id6749553162"
export const GOOGLE_PLAY_BASE_URL =
  "https://play.google.com/store/apps/details?id=com.banzai.banzaiapp"

export function buildAppLinkWithUtm(searchParams: URLSearchParams | null | undefined) {
  // Compatibilidade legada: garante que CTAs antigos também usem /download.
  return buildDownloadRouteWithUtm(searchParams)
}

/**
 * Gera URL da Google Play com parâmetros de atribuição no `referrer`.
 * Firebase/GA4 para Android lê esses valores via Install Referrer.
 */
export function buildGooglePlayUrlWithAttribution(
  searchParams: URLSearchParams | null | undefined,
) {
  const playUrl = new URL(GOOGLE_PLAY_BASE_URL)
  const referrer = new URLSearchParams()

  const utmSource = searchParams?.get("utm_source")
  const utmMedium = searchParams?.get("utm_medium")
  const utmCampaign = searchParams?.get("utm_campaign")
  const utmContent = searchParams?.get("utm_content")
  const utmTerm = searchParams?.get("utm_term")
  const gclid = searchParams?.get("gclid")
  const fbclid = searchParams?.get("fbclid")

  if (utmSource) referrer.set("utm_source", utmSource)
  if (utmMedium) referrer.set("utm_medium", utmMedium)
  if (utmCampaign) referrer.set("utm_campaign", utmCampaign)
  if (utmContent) referrer.set("utm_content", utmContent)
  if (utmTerm) referrer.set("utm_term", utmTerm)
  if (gclid) referrer.set("gclid", gclid)
  if (fbclid) referrer.set("fbclid", fbclid)

  const encodedReferrer = referrer.toString()
  if (encodedReferrer) {
    playUrl.searchParams.set("referrer", encodedReferrer)
  }

  return playUrl.toString()
}

/**
 * Gera URL da App Store com parâmetros de campanha.
 * Em iOS, o GA4/Firebase não possui equivalente ao `referrer` do Android.
 */
export function buildAppStoreUrlWithAttribution(
  searchParams: URLSearchParams | null | undefined,
) {
  const appStoreUrl = new URL(IOS_STORE_BASE_URL)
  const campaign = searchParams?.get("utm_campaign")

  if (campaign) {
    appStoreUrl.searchParams.set("ct", campaign)
  }

  appStoreUrl.searchParams.set("mt", "8")
  return appStoreUrl.toString()
}

export function buildStoreLinksWithAttribution(
  searchParams: URLSearchParams | null | undefined,
) {
  return {
    ios: buildAppStoreUrlWithAttribution(searchParams),
    android: buildGooglePlayUrlWithAttribution(searchParams),
  }
}

export function buildDownloadRouteWithUtm(
  searchParams: URLSearchParams | null | undefined,
) {
  const url = new URL(DOWNLOAD_ROUTE_PATH, "https://banzai.money")
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

  return `${DOWNLOAD_ROUTE_PATH}${url.search}`
}
