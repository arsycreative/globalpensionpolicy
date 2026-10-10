import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://globalpensionpolicy.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
