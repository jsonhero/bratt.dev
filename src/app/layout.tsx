import './globals.css';
import "prismjs/themes/prism-tomorrow.css";

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'

import { ColorMode } from './color-mode'
import { ColorModeScript } from './color-mode-script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navPages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/',
  },
  {
    title: 'Now',
    href: '/',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorModeScript attribute='data-color-mode' />
      </head>
      <body className={inter.className}>
        <header className="bg-primary">
          <div className="py-4 max-w-3xl flex justify-between m-auto">
            <h1 className="text-primary">Jason Bratt</h1>
            <nav>
              <ul className="flex list-none p-0 m-0 gap-6">
                {navPages.map((page, i) => (
                  <li key={i}>
                    <Link href={page.href} className="py-1 px-2 text-primary">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
             <ColorMode attribute='data-color-mode' />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
