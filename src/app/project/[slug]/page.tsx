import { getMDXComponent } from 'next-contentlayer/hooks'
import { allProjects } from '@generated-content'

import { MDXComponents } from '@/components/mdx-components'

export default async function Page({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) return null;

  const Content = getMDXComponent(project.body.code, MDXComponents)

  return (
    <div className="pb-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          {project.title}
        </h2>
        <p className="text-secondary">
          {project.period}
        </p>
      </div>
      <div className="h-8" />
      <div className="prose prose-h2:text-lg prose-h2:mb-2 prose-h2:font-semibold">
        <Content components={MDXComponents} />
      </div>
    </div>
  )
}