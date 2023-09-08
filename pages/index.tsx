import { env } from 'process'

export default function Home() {
  return (
    <main>
      <header>헤더 환경 : {env.UI}</header>
      <nav>내비바</nav>
      <section>본문</section>
      <aside>광고바</aside>
      <footer>copyright</footer>
    </main>
  )
}
