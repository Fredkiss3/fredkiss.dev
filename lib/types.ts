import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Experience = {
  company: string;
  type: string;
  title: string;
  startDate: string;
  endDate?: string;
  color: "primary" | "secondary" | "tertiary";
  technologies: string[];
};

export type Project = {
  name: string;
  image: string;
  startDate: string;
  color: "secondary" | "tertiary" | "dark" | "light";
  technologies: string[];
  url?: string;
  github?: string;
};

export type Skill = {
  id: string;
  name: string;
  technologies: string[];
};

export type MarkdownData<
  T extends {
    [key: string]: any;
  }
> = {
  data: T;
  content: string;
  serializedContent: MDXRemoteSerializeResult;
};
