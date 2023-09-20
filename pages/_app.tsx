import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lexend_Deca, Iceland } from 'next/font/google'

const lexend = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-lexend',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const iceland = Iceland({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-iceland',
  weight: [ "400"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend.variable} ${iceland.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
