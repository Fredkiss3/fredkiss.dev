"use client";
import * as React from "react";

// components
import { motion } from "framer-motion";
import { CustomLink } from "./custom-link";

// utils
import { clsx } from "~/lib/functions";
import { Bars3Icon } from "@heroicons/react/24/outline";

// types
import { NavLink } from "~/lib/types";

export function MobileMenu(props: { links: Array<NavLink> }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const containerAnimationOptions = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimationOptions = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <button
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        className="rounded-full bg-white p-2 shadow-xl lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Bars3Icon className="h-5" />
      </button>

      {isMenuOpen && (
        <motion.nav
          transition={{
            duration: 0.1,
          }}
          key={"nav-header"}
          variants={itemAnimationOptions}
          initial="hide"
          animate="show"
          className={clsx(
            `
              fixed 
              top-[4.3rem]
              bottom-0 left-0 right-0 
              z-20
            bg-light text-left`,
            "bg-opacity-75 backdrop-blur-md",
            "lg:hidden",
            "flex flex-col items-center justify-center"
          )}>
          <motion.ul
            className="flex flex-col gap-4"
            key={"header"}
            transition={{
              duration: 0.1,
            }}
            variants={containerAnimationOptions}
            initial="hide"
            animate="show">
            {props.links.map(link => (
              <motion.li
                key={link.href}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}>
                <CustomLink href={link.href}>{link.label}</CustomLink>
              </motion.li>
            ))}

            <motion.li
              key={`resume`}
              variants={itemAnimationOptions}
              transition={{
                duration: 0.1,
              }}>
              {/* @ts-expect-error */}
              <CustomLink href="/resume.pdf">Télécharger CV</CustomLink>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </>
  );
}
