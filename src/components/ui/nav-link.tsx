'use client'

import Link from "next/link"
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const subPath = `/${pathname.split('/')[1]}`
  const active = subPath === href;
  return (
    <Link href={href} className={clsx("py-1 px-5 rounded-full hover:text-primary", active ? "bg-secondary text-primary" : "text-secondary")}>
      {children}
    </Link>
)
}