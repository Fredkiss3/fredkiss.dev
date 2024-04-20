import * as React from "react";
// components
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// utils
import { useMDXComponent } from "next-contentlayer/hooks";
import { clsx } from "~/lib/functions";

// types
export type MdxBodyProps = {
  content: string;
  type?: "article" | "div";
  className?: string;
  components?: Record<string, (props: any) => React.ReactNode>;
};

const components = {
  h3: (props: any) => (
    <h3
      {...props}
      className={`text-xl font-semibold md:mb-4 md:text-2xl lg:text-3xl`}
    />
  ),
  a: (props: any) => (
    <a
      {...props}
      className={`inline-flex items-center font-semibold underline`}
      target={`_blank`}
    >
      <span>{props.children}</span>
      <ArrowTopRightOnSquareIcon className="h-4" />
    </a>
  ),
  ul: (props: any) => <ul {...props} className={`my-2 pl-6 leading-6`} />,
  li: (props: any) => (
    <li
      {...props}
      className={clsx(
        `relative my-2 list-none`,
        `before:ml-[-1em] before:inline-block before:h-[0.45em] before:w-[0.45em] `,
        `before:flex-shrink-0 before:rounded-full before:bg-dark`,
        "before:absolute before:top-3"
      )}
    />
  )
};

export function MdxBody({
  content,
  className,
  type = "article",
  components: defaultComponents = {}
}: MdxBodyProps) {
  const Component = useMDXComponent(content);
  const Tag = type === "article" ? "article" : "div";

  return (
    <>
      <Tag className={clsx(className)}>
        <Component components={{ ...components, ...defaultComponents }} />
      </Tag>
    </>
  );
}
