"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "~/lib/functions";

export function LangSwitcher() {
  const path = usePathname();

  return (
    <div className="inline-flex items-center rounded-md border-2 border-dark">
      <Link
        href={`/fr`}
        className={clsx("border-r border-dark p-1", {
          "bg-dark text-white": path.startsWith(`/fr`),
        })}>
        FR 🇫🇷
      </Link>
      <Link
        href={`/en`}
        className={clsx("border-l border-dark p-1", {
          "bg-dark text-white": path.startsWith(`/en`),
        })}>
        EN 🇺🇸
      </Link>
    </div>
  );
}
