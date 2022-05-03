import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Experience = {
  company: string;
  type: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  color: "primary" | "secondary" | "tertiary";
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
