import { getBlogPage } from '../../utils/notion'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { NotionPrism } from './prism'

export default async function Notion() {
  const blog = await getBlogPage()

  return (
    <div>
      <MDXRemote source={blog.parent}  />
      <NotionPrism />
    </div>
  )
}