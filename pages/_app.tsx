import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
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
  weight: ["400"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend.variable} ${iceland.variable}`}>
      <Head>
        <title>Antonio Salinas Roca</title>
        <meta name="description" content="Mi portfolio, ingeniero en Ciencias de la Computación. Programación, Diseño y Animación 3D." />
        <meta property="og:title" content="Antonio Salinas Roca" />
        <meta property="og:description" content="Mi portfolio, ingeniero en Ciencias de la Computación. Programación, Diseño y Animación 3D." />
        <meta property="og:image" content="/public/assets/image.jpg" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}
