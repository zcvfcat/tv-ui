import { MetadataRoute } from 'next'

/** @description 검색엔진 정책 설정 (네이버, 구글 콘솔 등록시 사용) */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/public/',
    },
    sitemap: '/sitemap.xml',
  }
}
