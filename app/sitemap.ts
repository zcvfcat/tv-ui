import { ENDPOINT } from '@/libs/endpoints'
import { MetadataRoute } from 'next'

/** @description 네이버, 구글 콘솔 등록시 SEO 효과 업 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: ENDPOINT.UI_BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${ENDPOINT.UI_BASE_URL}/channel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${ENDPOINT.UI_BASE_URL}/video`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
