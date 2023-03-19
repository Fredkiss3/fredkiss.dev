import * as React from "react";
// components
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Tag } from "./tag";

// utils
import { clsx } from "../lib/functions";

// types
import { Project } from "contentlayer/generated";
import { TranslationDictionary } from "~/lib/get-dictionnaries";

type ProjectCardProps = {
  children: React.ReactNode;
  inversed?: boolean;
  t: TranslationDictionary;
} & Project;

export function ProjectCard({
  name,
  technologies,
  github,
  url,
  image,
  children,
  inversed = false,
  t,
}: ProjectCardProps) {
  return (
    <div>
      <div
        className={clsx(
          "relative z-10 grid gap-4 py-5",
          "md:grid-cols-2 md:gap-8 md:p-10",
          "lg:grid-cols-5"
        )}>
        <div
          className={clsx("flex h-full items-start", "lg:col-span-2", {
            "md:order-last": !inversed,
          })}>
          <Image
            src={`/${image}`}
            width={250}
            height={250}
            sizes="(max-width: 640px) 50vw, 640px"
            alt={`Screenshot du projet ${name}`}
            className={clsx(
              `h-52 w-full rounded-md border-2 border-dark object-cover object-center`,
              "sm:h-72"
            )}
          />
        </div>

        <div className="flex flex-col gap-4  lg:col-span-3">
          <h3 className="text-2xl font-bold">{name}</h3>

          <ul className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            {url && (
              <a
                href={url}
                target={`_blank`}
                className="flex items-center font-bold  underline">
                <span>{t.projects.link}</span>
                <ArrowTopRightOnSquareIcon className="h-4" />
              </a>
            )}
            {github ? (
              <a
                href={github}
                target={`_blank`}
                className="flex items-center font-bold underline">
                <span>Github</span>
                <ArrowTopRightOnSquareIcon className="h-4" />
              </a>
            ) : (
              <span className="flex  items-center font-bold">
                <span>[{t.projects.private}]</span>{" "}
                <LockClosedIcon className="h-4" />
              </span>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export type ProjectCardSliderProps = {
  projects: Array<Project & { mdx: React.ReactNode }>;
  className?: string;
  t: TranslationDictionary;
};

export function ProjectCardSlider({
  projects,
  className,
  t,
}: ProjectCardSliderProps) {
  return (
    <ul
      className={clsx(
        className,
        "relative mx-auto flex max-w-[1200px] flex-col items-stretch gap-8"
      )}>
      {projects.map((p, index) => (
        <li key={p._id} className={`relative z-10`}>
          <ProjectCard t={t} {...p} inversed={index % 2 !== 0}>
            {p.mdx}
          </ProjectCard>
        </li>
      ))}
    </ul>
  );
}
