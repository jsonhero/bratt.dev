import './globals.css';
import "prismjs/themes/prism-tomorrow.css";

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx';

import { ColorMode } from './color-mode'
import { ColorModeScript } from './color-mode-script'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'bratt.dev',
  description: 'A personal website.',
}

const navPages = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'blog',
    href: '/blog',
  },
  {
    title: 'about',
    href: '/',
  },
  {
    title: 'now',
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
      <body className={clsx(inter.className, "gradient-container  bg-primary text-primary transition-colors")}>
        <header className="sticky">
          <div className="py-4 max-w-3xl flex justify-between m-auto">
            <h1 className="font-bold">bratt.dev</h1>
            <nav>
              <ul className="flex list-none p-0 m-0 gap-6">
                {navPages.map((page, i) => (
                  <li key={i}>
                    <Link href={page.href} className="py-1 px-2">{page.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
             <ColorMode attribute='data-color-mode' />
            </div>
          </div>
        </header>
        <main className="max-w-3xl mx-auto pt-16">{children}</main>
      </body>
    </html>
  )
}
