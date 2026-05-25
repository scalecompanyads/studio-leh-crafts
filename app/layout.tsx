import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laboratório Sewn Boards — Studio Leh Crafts',
  description:
    'Aprenda a criar um kit completo de papelaria premium com a técnica Sewn Boards Binding. Studio Leh Crafts com Leandro Mendes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans text-dark bg-dark overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
