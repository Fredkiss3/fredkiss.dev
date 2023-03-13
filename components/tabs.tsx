"use client";

import * as React from "react";
import { Tab } from "@headlessui/react";
import { clsx } from "~/lib/webutils";

export type TabsProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Tabs({ className, children }: TabsProps) {
  return (
    <div
      className={clsx(
        className,
        "mx-auto grid max-w-[1280px] gap-4",
        "md:grid-cols-2 md:place-items-center md:gap-14",
        "lg:grid-cols-12"
      )}>
      <Tab.Group>{children}</Tab.Group>
    </div>
  );
}

export function TabsHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tab.List
      className={clsx(
        className,
        `flex w-full flex-col gap-4`,
        `lg:col-span-5`
      )}>
      {children}
    </Tab.List>
  );
}

export function TabsHeaderItem({
  children,
  className,
  iconColor = `primary`,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
  iconColor?: `primary` | `secondary` | `tertiary`;
}) {
  return (
    <Tab as={React.Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            className,
            `flex w-full items-center gap-4 rounded-md border p-4`,
            `transition duration-200 ease-in-out`,
            `focus:shadow-md focus:shadow-gray-200/50`,
            {
              "border-2 border-secondary": selected,
            }
          )}>
          <div
            className={clsx(`flex items-center rounded-full p-4 text-white`, {
              "bg-primary": iconColor === `primary`,
              "bg-secondary": iconColor === `secondary`,
              "bg-tertiary": iconColor === `tertiary`,
            })}>
            {icon}
          </div>
          <h3 className={`text-xl font-bold`}>{children}</h3>
        </button>
      )}
    </Tab>
  );
}

export function TabsBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tab.Panels className={clsx(className, `w-full py-4`)}>
      {children}
    </Tab.Panels>
  );
}

export function TabsItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tab.Panel className={clsx(className, `w-full`)}>{children}</Tab.Panel>
  );
}
