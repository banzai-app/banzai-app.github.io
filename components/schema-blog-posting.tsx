const SITE_URL = "https://banzai.money"

type Props = {
  slug: string
  title: string
  description: string
}

export function SchemaBlogPosting({ slug, title, description }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/learn/${slug}/`,
    publisher: {
      "@type": "Organization",
      name: "Banzai",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/banzai_logo_black.png` },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
