
import Image from 'next/image'
import { GithubIcon, ScrollIcon } from 'lucide-react'

const socials = [
  {
    Icon: GithubIcon,
    text: 'Github',
    href: 'https://github.com/jsonhero'
  },
  {
    Icon: ScrollIcon,
    text: 'Resume',
    href: '/resume.pdf'
  },
]

export default function Home() {
  return (
    <div>
      <div className="border rounded-full overflow-hidden w-[160px] h-[160px] border-primary">
        <Image src="/profile.jpeg" width={160} height={160} alt="Profile" />
      </div>
      <div className="h-7"></div>
      <div>
        <p>
          {`I'm Jason, a full-stack software engineer. This is my personal website.`}
        </p>
        <div className="mt-6">
          <ul className="flex list-none p-0 m-0 gap-6">
            {socials.map((social, i) => (
              <li key={i}>
                <a href={social.href} target="none" rel="noopener noreferrer">
                  <div className="flex items-center py-2 px-3 border border-primary rounded-lg gap-3">
                    <social.Icon />
                    {social.text}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
