import React from "react";
import NextLink from "next/link";
import { clsx } from "../lib/webutils";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "./link";
import { motion } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const containerAnimationOptions = {
    hide: { opacity: 1 },
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

  const scrollTo = (hash: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(hash) as HTMLElement;
    if (el) {
      const offset = el.offsetTop - 50;
      scroll({
        top: offset,
        behavior: "smooth",
      });
      window.location.hash = hash;
    }
  };

  return (
    <>
      <header className={`bg-light px-4 pt-4 fixed top-0 left-0 right-0 z-10`}>
        <div className="flex justify-between items-center">
          <NextLink href={`/`}>
            <a className="font-custom text-4xl font-bold">Adrien</a>
          </NextLink>

          <button
            className="rounded-full bg-white p-2 shadow-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-5" />
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className={clsx(
              `
              fixed 
              top-[4.3rem]
              bottom-0 left-0 right-0 
              text-left
            bg-light z-20`,
              "bg-opacity-75 backdrop-blur-md",
              "md:hidden",
              "flex flex-col items-center justify-center"
            )}
          >
            <motion.ul
              className="flex flex-col gap-4"
              key={"header"}
              variants={containerAnimationOptions}
              initial="hide"
              animate="show"
            >
              <motion.li
                key={`projects`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}
              >
                <Link
                  empty
                  onClick={(e) => scrollTo("#projects", e)}
                  href="#projects"
                >
                  Projets
                </Link>
              </motion.li>

              <motion.li
                key={`experience`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}
              >
                <Link
                  empty
                  onClick={(e) => scrollTo("#experience", e)}
                  href="#experience"
                >
                  Expérience
                </Link>
              </motion.li>

              <motion.li
                key={`about`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}
              >
                <Link
                  empty
                  onClick={(e) => scrollTo("#about", e)}
                  href="#about"
                >
                  A propos de moi
                </Link>
              </motion.li>

              <motion.li
                key={`resume`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}
              >
                <Link empty href="/resume.pdf" download>
                  Télécharger CV
                </Link>
              </motion.li>
            </motion.ul>
          </nav>
        )}

        <hr className="mt-3 border-gray-200" />
      </header>
    </>
  );
}
