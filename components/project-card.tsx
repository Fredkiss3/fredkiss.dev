import { ExternalLinkIcon, LockClosedIcon } from "@heroicons/react/solid";
import { MDXRemote } from "next-mdx-remote";
import * as React from "react";
import { MarkdownData, Project } from "../lib/types";
import { clsx } from "../lib/webutils";
import { Image } from "./image";
import { Tag } from "./tag";

export interface ProjectCardProps extends MarkdownData<Project> {}

const components = {
  a: (props: any) => (
    <a
      {...props}
      className={`underline font-bold inline-flex items-center`}
      target={`_blank`}
    >
      <span>{props.children}</span>
      <ExternalLinkIcon className="h-4" />
    </a>
  ),
};

export function ProjectCard({
  data: { color = `secondary`, name, technologies, github, url, image },
  serializedContent,
}: ProjectCardProps) {
  return (
    <div
      className={clsx("grid rounded-xl gap-2  p-4  shadow-xl", {
        "bg-secondary text-white": color === `secondary`,
        "bg-tertiary text-dark": color === `tertiary`,
        "bg-dark text-white": color === `dark`,
      })}
    >
      <div className="grid gap-2">
        <Image
          src={`/${image}`}
          alt={`Screenshot du projet ${name}`}
          className={`w-full h-40 rounded-md`}
          objectFit={`cover`}
          imageClassName={`rounded-md`}
        />

        <h3 className="text-xl font-bold">{name}</h3>
      </div>

      <article className="text-sm grid gap-2">
        <MDXRemote {...serializedContent} components={components} />
      </article>

      <ul className="flex gap-2 flex-wrap">
        {technologies.map((tech) => (
          <li key={tech}>
            <Tag color="light">{tech}</Tag>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        {url && (
          <a
            href={url}
            target={`_blank`}
            className="font-bold underline flex  items-center"
          >
            <span>Lien du projet</span>
            <ExternalLinkIcon className="h-4" />
          </a>
        )}
        {github ? (
          <a
            href={github}
            target={`_blank`}
            className="font-bold underline flex items-center"
          >
            <span>Github</span>
            <ExternalLinkIcon className="h-4" />
          </a>
        ) : (
          <span className="font-bold  flex items-center">
            <span>[Code Privé]</span> <LockClosedIcon className="h-4" />
          </span>
        )}
      </div>
    </div>
  );
}
