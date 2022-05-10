import { ExternalLinkIcon } from "@heroicons/react/solid";
import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { Experience, MarkdownData } from "../lib/types";
import { clsx, formatDate } from "../lib/webutils";
import { Tag } from "./tag";

export interface ExperienceProps extends MarkdownData<Experience> {}

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

export function ExperienceTimeline({
  data: { company, startDate, endDate, title, color, technologies, type },
  serializedContent,
}: ExperienceProps) {
  return (
    <>
      <div
        className={clsx(
          "relative grid gap-8 pb-8 pl-10",
          "lg:grid-cols-2 lg:gap-10 lg:pl-0"
        )}
      >
        {/* Timeline  */}
        <div
          className={clsx(
            "top-0 left-0 absolute flex items-center justify-center",
            "border-dashed rounded-full border-2 p-2 border-dark",
            "lg:left-1/2"
          )}
        >
          <div
            className={clsx("h-3 w-3 rounded-full", {
              "bg-secondary": color === "secondary",
              "bg-tertiary": color === "tertiary",
              "bg-primary": color === "primary",
            })}
          />
        </div>

        {/* Timeline  */}
        <div
          className={clsx(
            "absolute border-dark border border-dashed",
            "bottom-0 top-8 left-4",
            "lg:left-[calc(50%+1rem)]"
          )}
        />

        {/* Content */}
        <div className={clsx("flex flex-col gap-3", "lg:pl-10")}>
          <h3 className="font-bold text-2xl">{title}</h3>
          <ul className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>
          <MDXRemote {...serializedContent} components={components} />
        </div>

        {/* Date & type  */}
        <div className="lg:order-first">
          <h4 className="font-bold text-xl">
            {company}, {type}
          </h4>

          <p>
            {formatDate(startDate)} -&nbsp;
            {endDate ? formatDate(endDate) : "Aujourd'hui"}
          </p>
        </div>
      </div>
    </>
  );
}
