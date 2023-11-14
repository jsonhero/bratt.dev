// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "@contentlayer/source-files";
import rehypePrism from "@mapbox/rehype-prism";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var blogComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false }
  },
  computedFields: blogComputedFields
}));
var projectComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  }
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    period: { type: "string", required: true },
    url: { type: "string", required: false }
  },
  computedFields: projectComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "_content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [rehypePrism]
  }
});
export {
  Blog,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-74ZF6AP7.mjs.map
