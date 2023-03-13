import { MdxBody } from "./mdx";
import { Tag } from "./tag";

// utils
import { clsx, formatDate } from "~/lib/webutils";

// types
import type { Experience } from "contentlayer/generated";

export type ExperienceProps = {
  experience: Experience;
};

export function ExperienceTimeline({ experience: xp }: ExperienceProps) {
  return (
    <>
      <div
        className={clsx(
          "relative grid gap-8 pb-8 pl-10",
          "lg:grid-cols-2 lg:gap-10 lg:pl-0"
        )}>
        {/* Timeline  */}
        <div
          className={clsx(
            "absolute top-0 left-0 flex items-center justify-center",
            "rounded-full border-2 border-dashed border-dark p-2",
            "lg:left-1/2"
          )}>
          <div
            className={clsx("h-3 w-3 rounded-full", {
              "bg-secondary": xp.color === "secondary",
              "bg-tertiary": xp.color === "tertiary",
              "bg-primary": xp.color === "primary",
            })}
          />
        </div>

        {/* Timeline  */}
        <div
          className={clsx(
            "absolute border border-dashed border-dark",
            "bottom-0 top-8 left-4",
            "lg:left-[calc(50%+1rem)]"
          )}
        />

        {/* Content */}
        <div className={clsx("flex flex-col gap-3", "lg:pl-10")}>
          <h3 className="text-2xl font-bold">{xp.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {xp.technologies.map(tech => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>
          <MdxBody content={xp.body.code} />
        </div>

        {/* Date & type  */}
        <div className="lg:order-first">
          <h4 className="text-xl font-bold">
            {xp.company}, {xp.jobType}
          </h4>

          <p>
            {formatDate(xp.startDate)} -&nbsp;
            {xp.endDate ? formatDate(xp.endDate) : "Aujourd'hui"}
          </p>
        </div>
      </div>
    </>
  );
}
