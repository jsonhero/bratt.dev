import { DateTime } from 'luxon'
import Link from 'next/link'
import { allBlogs } from '@generated-content'

export default async function Notion() {
  return (
    <div>
      <ul>
        {allBlogs.map((blog) => {
          return (
            <li key={blog._id} className="flex gap-12 items-center py-3">
              <div className="text-secondary">
                {DateTime.fromISO(blog.publishedAt).toLocal().toFormat('LLL dd, yyyy')}
              </div>
              <Link className="font-bold" href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}