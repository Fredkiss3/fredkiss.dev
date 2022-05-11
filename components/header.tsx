import React from "react";
import NextLink from "next/link";
import { clsx } from "../lib/webutils";
import { MenuIcon } from "@heroicons/react/solid";
import { Link } from "./link";
import { motion } from "framer-motion";
import Icon from "./icon";

export function Header() {
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
      <header
        className={clsx(
          `bg-light px-4 pt-4 fixed top-0 left-0 right-0 z-30 `,
          `items-center bg-opacity-80`,
          `md:px-8`,
          `lg:flex lg:py-2`,
          `before:backdrop-blur-md before:absolute before:inset-0`,
          `before:z-10 before:pointer-events-none`
        )}
      >
        <div className="relative z-20 flex justify-between items-center">
          <NextLink href={`/`}>
            <a className="font-custom text-4xl font-bold">Adrien</a>
          </NextLink>

          <button
            className="rounded-full bg-white p-2 shadow-xl lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-5" />
          </button>
        </div>

        <nav className="relative z-20 hidden lg:flex flex-grow justify-center">
          <ul className="flex gap-4">
            <li>
              <Link onClick={(e) => scrollTo("#projects", e)} href="#projects">
                Projets
              </Link>
            </li>

            <li>
              <Link onClick={(e) => scrollTo("#skills", e)} href="#skills">
                EXPERTISE
              </Link>
            </li>

            <li>
              <Link
                onClick={(e) => scrollTo("#experience", e)}
                href="#experience"
              >
                Expérience
              </Link>
            </li>

            <li>
              <Link href="/resume.pdf" download>
                CV
              </Link>
            </li>
          </ul>
        </nav>

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
              text-left
            bg-light z-20`,
              "bg-opacity-75 backdrop-blur-md",
              "lg:hidden",
              "flex flex-col items-center justify-center"
            )}
          >
            <motion.ul
              className="flex flex-col gap-4"
              key={"header"}
              transition={{
                duration: 0.1,
              }}
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
                  onClick={(e) => scrollTo("#projects", e)}
                  href="#projects"
                >
                  Projets
                </Link>
              </motion.li>

              <motion.li
                key={`about`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.05,
                }}
              >
                <Link onClick={(e) => scrollTo("#skills", e)} href="#skills">
                  EXPERTISE
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
                  onClick={(e) => scrollTo("#experience", e)}
                  href="#experience"
                >
                  Expérience
                </Link>
              </motion.li>

              <motion.li
                key={`resume`}
                variants={itemAnimationOptions}
                transition={{
                  duration: 0.1,
                }}
              >
                <Link href="/resume.pdf" download>
                  Télécharger CV
                </Link>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}

        <ul className="relative z-20 gap-4 hidden lg:flex">
          <li>
            <a
              href="https://www.linkedin.com/in/adrien-kissie-3b6b32162/"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex rounded-full p-3 items-center justify-center",
                "shadow-sm bg-white hover:shadow-lg transition-shadow duration-100"
              )}
            >
              <Icon icon="linkedin" className="text-secondary h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Fredkiss3"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex rounded-full p-3 items-center justify-center",
                "shadow-sm bg-white hover:shadow-lg transition-shadow duration-100"
              )}
            >
              <Icon icon="github" className="text-secondary h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://twitch.tv/Fredkisss"
              target={"_blank"}
              rel="noreferrer"
              className={clsx(
                "flex rounded-full p-3 items-center justify-center",
                "shadow-sm bg-white hover:shadow-lg transition-shadow duration-100"
              )}
            >
              <Icon icon="twitch" className="text-secondary h-6" />
            </a>
          </li>
        </ul>

        <hr className="mt-3 border-gray-200 lg:hidden" />
      </header>
    </>
  );
}
