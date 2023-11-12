import 'server-only'

import { Client } from "@notionhq/client";
import React from "react";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getBlogPage = React.cache(async () => {  
  const blocks = await notion.blocks.children.list({
    block_id: '36e0fb6fd62f4daa89f8bfb4548da564',
  })
  const md = await n2m.blocksToMarkdown(blocks.results)
  return n2m.toMarkdownString(md)
})

export const getBlogPages = React.cache(async () => {  
  const blogDatabase = await notion.databases.query({
    database_id: 'e85b3f510627475c927ef14c29ab2bce'
  })

  return blogDatabase
})
