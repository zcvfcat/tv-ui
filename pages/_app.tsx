import Head from '@/app/head'
import { Cookies, CookiesProvider } from 'react-cookie'

import type { AppProps } from 'next/app'
import { isBrowser } from '@/utils/isBrowser'

export default function NextApp({ Component, pageProps }: AppProps) {
  // axios 인터셉터
  // 프로젝트 전역 상태 관리 (store)
  // 데이터 캐시 관리
  // 쿠키 관리

  return (
    <>
      <Head />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </>
  )
}
