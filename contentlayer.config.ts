import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Skill = defineDocumentType(() => ({
  name: "Skill",
  filePathPattern: `skills/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    icon: {
      type: "enum",
      options: ["cpu", "photo", "computer"],
      required: true,
    },
    iconColor: {
      type: "enum",
      options: ["primary", "secondary", "tertiary"],
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
}));

const Experience = defineDocumentType(() => ({
  name: "Experience",
  filePathPattern: `experiences/*.mdx`,
  contentType: "mdx",
  fields: {
    startDate: {
      type: "date",
      required: true,
    },
    endDate: {
      type: "date",
      required: false,
    },
    color: {
      type: "enum",
      options: ["primary", "secondary", "tertiary"],
      required: true,
    },
    company: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    jobType: {
      type: "string",
      required: true,
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    startDate: {
      type: "date",
      required: true,
    },
    color: {
      type: "enum",
      options: ["primary", "secondary", "tertiary", "light", "dark"],
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
      required: false,
    },
    github: {
      type: "string",
      required: false,
    },
    technologies: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Skill, Experience, Project],
});
