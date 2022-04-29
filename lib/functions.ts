import type { Experience, MarkdownData } from "./types";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export async function readMarkdownFiles<
  T extends {
    [key: string]: any;
  }
>(...paths: string[]): Promise<MarkdownData<T>[]> {
  const dataList: MarkdownData<T>[] = [];

  const markdownContent = readdirSync(join(process.cwd(), ...paths)).map(
    (file) => {
      return readFileSync(join(process.cwd(), ...paths, file), "utf8");
    }
  );

  for (const fileContent of markdownContent) {
    const { content, data } = matter(fileContent);
    const serializedContent = await serialize(content);

    dataList.push({
      data: data as T,
      content,
      serializedContent,
    });
  }

  return dataList;
}

export async function getExperiences(): Promise<MarkdownData<Experience>[]> {
  return readMarkdownFiles<Experience>("data", "experience");
}

// export function getProjects(): Experience[] {}
