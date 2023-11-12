import { getBlogPages } from '@/utils/notion'
import { DateTime } from 'luxon'

export default async function Notion() {
  const blogPages = await getBlogPages()

  return (
    <div>
      <ul>
        {blogPages.results.map((blogPage) => {
          return (
            <li key={blogPage.id} className="flex gap-12 items-center py-3">
              <div className="text-secondary">
                {DateTime.fromISO(blogPage.created_time).toLocal().toFormat('yyyy LLL dd')}
              </div>
              <div className="font-bold">
                {blogPage.properties?.Name.title[0]?.plain_text}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}