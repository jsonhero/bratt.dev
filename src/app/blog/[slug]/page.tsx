import { getPageMd, getPage } from "@/utils/notion"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { NotionPrism } from '../../../utils/prism'
import { DateTime } from "luxon"

export default async function Page({ params }: { params: { slug: string } }) {

  const page = await getPage(params.slug)
  const blog = await getPageMd(params.slug)

  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          {/* @ts-ignore */}
          {page.properties?.Name.title[0]?.plain_text}
        </h2>
        <p className="text-secondary">
          {/* @ts-ignore */}
          {DateTime.fromISO(page?.created_time).toLocal().toFormat('LLL dd, yyyy')}
        </p>
      </div>
      <div className="h-8" />
      <div className="prose prose-h2:text-lg prose-h2:mb-2 prose-h2:font-semibold">
        <MDXRemote source={blog.parent} />
        <NotionPrism />
      </div>
    </div>
  )
}