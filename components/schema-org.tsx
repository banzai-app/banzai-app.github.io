const SITE_URL = "https://banzai.money"

export function SchemaOrg() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Banzai",
    url: SITE_URL,
    logo: `${SITE_URL}/banzai_logo_black.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "contato@banzai.money",
      contactType: "customer service",
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Banzai",
    url: SITE_URL,
    description:
      "Controle seus gastos por semana, sem planilha. Conecte suas contas via Open Finance.",
    publisher: { "@type": "Organization", name: "Banzai" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website),
        }}
      />
    </>
  )
}
