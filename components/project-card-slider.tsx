"use client";
import * as React from "react";
// components
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Tag } from "./tag";

// utils
import { clsx } from "../lib/webutils";

// types
import { Project } from "contentlayer/generated";

type ProjectCardProps = {
  children: React.ReactNode;
  show: boolean;
} & Project;

export function ProjectCard({
  color,
  name,
  technologies,
  github,
  url,
  image,
  children,
  show,
}: ProjectCardProps) {
  return (
    <div
      className={clsx("relative", {
        hidden: !show,
      })}>
      <div
        className={clsx(
          "relative z-10 grid gap-4 p-5",
          "md:grid-cols-2 md:p-10",
          "lg:grid-cols-5"
        )}>
        <div className="flex h-full items-center md:order-last lg:col-span-2">
          <Image
            src={`/${image}`}
            width={500}
            height={500}
            alt={`Screenshot du projet ${name}`}
            className={clsx(
              `h-52 w-full rounded-md border-2 border-dark object-cover object-center`,
              "sm:h-72"
            )}
          />
        </div>

        <div className="flex flex-col gap-4 md:justify-center lg:col-span-3">
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
                <span>Lien du projet</span>
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
                <span>[Code Privé]</span> <LockClosedIcon className="h-4" />
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
};

export function ProjectCardSlider({
  projects,
  className,
}: ProjectCardSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function goToPrevious() {
    let nextIndex = currentIndex - 1;

    if (nextIndex < 0) {
      nextIndex = projects.length - 1;
    }

    setCurrentIndex(nextIndex);
  }
  function goToNext() {
    let nextIndex = currentIndex + 1;

    if (nextIndex > projects.length - 1) {
      nextIndex = 0;
    }

    setCurrentIndex(nextIndex);
  }

  return (
    <ul className={clsx(className, "relative mx-auto max-w-[1200px]")}>
      <button
        onClick={goToPrevious}
        className={clsx(
          "absolute top-40 left-0 z-20 bg-tertiary p-2",
          "flex items-center rounded-full",
          "md:top-1/2 md:-translate-y-1/2"
        )}
        aria-label="Précédent">
        <ChevronLeftIcon className="h-4 w-4 text-dark" strokeWidth="2" />
      </button>
      {projects.map((p, index) => (
        <li key={p._id} className={`relative z-10`}>
          <ProjectCard show={currentIndex === index} {...p}>
            {p.mdx}
          </ProjectCard>
        </li>
      ))}

      <button
        onClick={goToNext}
        className={clsx(
          "absolute top-40 right-0 z-20 bg-tertiary p-2",
          "flex items-center rounded-full",
          "md:top-1/2 md:-translate-y-1/2"
        )}
        aria-label="Précédent">
        <ChevronRightIcon className="h-4 w-4 text-dark" strokeWidth="2" />
      </button>
    </ul>
  );
}
