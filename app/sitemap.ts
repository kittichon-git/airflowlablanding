import { MetadataRoute } from 'next'

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://airflowlab.example.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.5 },
  ]
}
