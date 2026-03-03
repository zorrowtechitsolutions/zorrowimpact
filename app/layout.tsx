import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// 🤖 Import Zorrow AI (GLOBAL)
import { ZorrowAIAssistant } from '@/components/zorrow-ai-assistant'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZORROW IMPACT - Technology Empowering Humanity',
  description:
    'Discover trusted charities, track your impact, and change the world. Join thousands of donors making a real difference.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        
        {/* All pages render here */}
        {children}

        {/* 🤖 GLOBAL AI ASSISTANT (shows on every page) */}
        <ZorrowAIAssistant />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  )
}