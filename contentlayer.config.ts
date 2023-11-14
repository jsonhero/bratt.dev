import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "@contentlayer/source-files";
import rehypePrism from "@mapbox/rehype-prism";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const blogComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: blogComputedFields,
}));

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    period: { type: "string", required: true },
    url: { type: "string", required: false },
  },
  computedFields: projectComputedFields,
}));

export default makeSource({
  contentDirPath: "_content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [rehypePrism],
    // remarkPlugins: [codeTitle],
  },
});