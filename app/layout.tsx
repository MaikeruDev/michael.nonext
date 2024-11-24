import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michael Prietl | Passionate Web Developer & Designer',
  description: "Hi, I'm Michael — a web developer specializing in Next.js. I create sleek, functional, and user-friendly digital experiences tailored to your needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>John Doe | Portfolio</title>
        <meta name="description" content="Explore the portfolio of John Doe, a skilled Web Developer specializing in Next.js." />
        <meta name="keywords" content="Portfolio, Web Developer, Next.js, Frontend Developer, Michael Prietl" />
        <meta property="og:title" content="Michael Prietl | nonext" />
        <meta property="og:description" content="Explore the portfolio of Michael Prietl, a skilled Web Developer specializing in Next.js." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="nonext.io" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
