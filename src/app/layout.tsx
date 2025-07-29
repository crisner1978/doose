import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import { SiteSettingsQueryResult } from '@/sanity/types'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<SiteSettingsQueryResult>(siteSettingsQuery)

  if (!settings) {
    return {
      title: 'C.A. Doose & Company',
      description: 'C.A. Doose & Company',
    }
  }

  const ogImageUrl = settings.ogImage ? urlFor(settings.ogImage).width(1200).height(630).url() : ''

  return {
    title: settings.title,
    description: settings.description,
    keywords: settings.keywords,
    authors: [{ name: settings.author || 'C.A. Doose & Company' }],
    openGraph: {
      title: settings.title ?? undefined,
      description: settings.description ?? undefined,
      url: settings.url ?? undefined,
      siteName: settings.title ?? undefined,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await client.fetch<SiteSettingsQueryResult>(siteSettingsQuery)

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen w-full scroll-auto bg-gray-950 font-sans antialiased`}>
        <Navbar logo={settings?.logo} navigationLinks={settings?.navigationLinks} phone={settings?.phone} />
        {children}
        <Footer
          logo={settings?.logo}
          footerText={settings?.footerText}
          socialLinks={settings?.socialLinks}
          footerLinks={settings?.footerLinks}
          email={settings?.email}
          phone={settings?.phone}
        />
      </body>
    </html>
  )
}
