import { clsx } from "../lib/webutils";
import Icon from "./icon";
import { Link } from "./link";

export function Footer() {
  return (
    <footer className="grid pt-5 px-5 md:px-8 gap-8 bg-light mt-8">
      <div className={clsx("grid grid-cols-1 gap-8", "md:grid-cols-12")}>
        <div
          className={clsx(
            "flex flex-col gap-4 text-2xl font-bold max-w-[1280px] mx-auto",
            "md:col-span-7",
            "lg:col-span-8"
          )}
        >
          <h2>
            Contactez-moi pour construire quelque chose d&rsquo;incroyable
            ensemble.
          </h2>
          <ul className="flex gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/adrien-kissie-3b6b32162/"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon icon="linkedin" className="text-secondary h-8" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Fredkiss3"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon icon="github" className="text-secondary h-8" />
              </a>
            </li>

            <li>
              <a
                href="https://twitch.tv/Fredkisss"
                target={"_blank"}
                rel="noreferrer"
              >
                <Icon icon="twitch" className="text-secondary h-8" />
              </a>
            </li>
          </ul>

          <p>
            Commencez par dire bonjour à l&rsquo;adresse{" "}
            <a
              rel="noreferrer"
              href="mailto:fredkiss3@gmail.com"
              target="_blank"
              className="text-primary underline"
            >
              fredkiss3@gmail.com <span role="img">👋</span>
            </a>
          </p>
        </div>

        <div
          className={clsx(
            "flex flex-col gap-4",
            "md:col-span-5 md:gap-8",
            "lg:col-span-4"
          )}
        >
          <h2 className="text-2xl font-bold">Information</h2>

          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#projects">Projets</Link>
            </li>
            <li>
              <Link href="#skills">EXPERTISE</Link>
            </li>
            <li>
              <Link href="#experience">Expérience</Link>
            </li>

            <li>
              <Link href="/resume.pdf" download>
                Télécharger CV
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t-2 border-gray-200">
        Copyright &copy; 2022 Adrien KISSIE
      </div>
    </footer>
  );
}
