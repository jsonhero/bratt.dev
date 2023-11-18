
import Image from 'next/image'
import { GithubIcon, ScrollIcon } from 'lucide-react'
import { allProjects } from '../../.contentlayer/generated'
import Link from 'next/link'

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
      <div className="flex items-center gap-10">
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
        <div className="border rounded-lg overflow-hidden w-[160px] h-[160px] border-primary">
          <Image src="/old_profile.jpeg" width={160} height={160} alt="Profile" />
        </div>
      </div>
      <div className="h-20"></div>
      {/* <div>
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="h-4"></div>
        <ul className="flex flex-col list-none p-0 m-0 gap-5">
          {allProjects.map((project, key) => (
            <li key={project._id} className='w-full'>
              <Link href={`/project/${project.slug}`}>
                <div className="flex justify-between items-center border rounded-md border-tertiary p-4 hover:border-l-8 transition-all duration-200">
                  <div className="flex">
                    <div>
                      <Image src={project.coverImageUrl} alt="tet" width={80} height={40} />
                    </div>
                    <div className="pl-4">
                      <div>
                        <h2 className="font-semibold text-lg">{project.title}</h2>
                        <p className="text-secondary text-sm">{project.period}</p>
                      </div>
                      <div className="mt-1">
                        {project.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg ml-10 w-10">
                    {"->"}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}
