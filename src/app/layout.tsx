import './globals.css';
import "prismjs/themes/prism-tomorrow.css";

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { css } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'

import { hstack } from '../../styled-system/patterns'
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
        <header className={css({
          backgroundColor: 'background'
        })}>
          <div className={hstack({
            py: 'md',
            maxWidth: '700px',
            justifyContent: 'space-between',
            margin: 'auto',
          })}>
            <h1>Jason Bratt</h1>
            <nav>
              <ul className={css({
                display: 'flex',
                listStyle: 'none',
                p: 0,
                m: 0,
                gap: '1.5rem',
              })}>
                {navPages.map((page, i) => (
                  <li key={i}>
                    <Link href={page.href} className={css({
                      py: 'xsm',
                      px: 'sm'
                    })}>{page.title}</Link>
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