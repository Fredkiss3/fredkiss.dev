import Icon from "./icon";
import { Link } from "./link";

export function Footer() {
  return (
    <footer className="grid pt-5 px-5 grid-cols-1 gap-8">
      <div className="flex flex-col gap-4 text-2xl font-bold">
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
        </ul>

        <p>
          Commencez par dire{" "}
          <a
            rel="noreferrer"
            href="mailto:fredkiss3@gmail.com"
            target="_blank"
            className="text-primary underline"
          >
            bonjour <span role="img">👋</span>
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Information</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="#projects">Projets</Link>
          </li>
          <li>
            <Link href="#projects">Expérience</Link>
          </li>
          <li>
            <Link href="#projects">A propos de moi</Link>
          </li>
        </ul>
      </div>

      <div className="text-center py-4 border-t-2 border-gray-200">
        Copyright &copy; 2022 Adrien KISSIE
      </div>
    </footer>
  );
}
