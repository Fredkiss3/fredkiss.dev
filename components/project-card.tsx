import { ExternalLinkIcon, LockClosedIcon } from "@heroicons/react/solid";
import { MDXRemote } from "next-mdx-remote";
import * as React from "react";
import { MarkdownData, Project } from "../lib/types";
import { clsx } from "../lib/webutils";
import { Image } from "./image";
import { Tag } from "./tag";
import { motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const containerAnimationOptions = {
    hide: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
    },
  };

  return (
    <div
      className={clsx("relative rounded-xl shadow-xl", {
        "bg-secondary text-white": color === `secondary`,
        "bg-tertiary text-dark": color === `tertiary`,
        "bg-dark text-white": color === `dark`,
      })}
    >
      <div className={clsx("relative z-10 grid gap-4 p-5")}>
        <div className="flex h-full items-center">
          <Image
            src={`/${image}`}
            alt={`Screenshot du projet ${name}`}
            className={clsx(`w-full h-40 rounded-md`)}
            objectFit={`cover`}
            imageClassName={`rounded-md`}
          />
        </div>

        <div className="flex flex-col gap-4 md:justify-center">
          <h3 className="text-xl font-bold">{name}</h3>

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

          <button
            type="button"
            className={clsx(
              "inline-flex justify-center rounded-md border border-transparent",
              "bg-light px-4 py-2 text-sm font-medium text-primary",
              "hover:bg-white",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
            onClick={toggle}
          >
            {isOpen ? `Fermer` : `Voir les détails`}
          </button>

          {isOpen && (
            <motion.article
              key={`project-card`}
              variants={containerAnimationOptions}
              initial="hide"
              animate="show"
              exit={`hide`}
              className={"text-sm grid gap-2 md:hidden"}
            >
              <MDXRemote {...serializedContent} components={components} />
            </motion.article>
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 w-full h-full opacity-[8%] pointer-events-none`}
        style={{
          backgroundImage: `url(/pattern.svg)`,
          backgroundPosition: `center`,
          backgroundSize: `35px`,
        }}
      />
    </div>
  );
}
