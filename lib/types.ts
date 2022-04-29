import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Experience = {
  company: string;
  position: string;
  type: string;
  startDate: Date;
  endDate?: Date;
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
