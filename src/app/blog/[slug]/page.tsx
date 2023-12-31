import { DateTime } from "luxon"
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '@generated-content'

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

  if (!blog) return null;

  const Content = getMDXComponent(blog.body.code)

  return (
    <div className="pb-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          {blog.title}
        </h2>
        <p className="text-secondary">
          {DateTime.fromISO(blog.publishedAt).toLocal().toFormat('LLL dd, yyyy')}
        </p>
      </div>
      <div className="h-8" />
      <div className="prose prose-h2:text-lg prose-h2:mb-2 prose-h2:font-semibold">
        <Content />
      </div>
    </div>
  )
}