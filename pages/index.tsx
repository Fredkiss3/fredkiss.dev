/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";

// components
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ExperienceTimeline } from "../components/experience-timeline";
import { ProjectCard } from "../components/project-card";
import { CompetenceCard } from "../components/competence-card";
import {
  ChipIcon,
  DesktopComputerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { Tag } from "../components/tag";
import { Image } from "../components/image";

// lib and utils
import type { Experience, MarkdownData, Project, Skill } from "../lib/types";
import type { GetStaticProps, NextPage } from "next";
import { clsx } from "../lib/webutils";
import { getExperiences, getProjects, getSkills } from "../lib/functions";

type HomePageProps = {
  experiences: MarkdownData<Experience>[];
  projects: MarkdownData<Project>[];
  skills: MarkdownData<Skill>[];
};

const Home: NextPage<HomePageProps> = (props) => {
  React.useEffect(() => {
    // smooth scroll to element with id
    document.querySelectorAll("a").forEach((anchor) => {
      if (anchor.hash) {
        const el = document.querySelector(anchor.hash) as HTMLElement;

        if (el) {
          const offset = el.offsetTop - 50;
          anchor.addEventListener("click", (e) => {
            e.preventDefault();

            scroll({
              top: offset,
              behavior: "smooth",
            });

            window.location.hash = anchor.hash;
          });
        }
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Adrien KISSIE - Portfolio</title>
        <meta name="title" content="Adrien KISSIE | Développeur FullStack"/>
        <meta name="description" content={`Adrien KISSIE est un développeur web et streamer sur twitch, spécialiste en frontend et backend.`} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://fredkiss.dev/"/>
        <meta property="og:title" content="Adrien KISSIE | Développeur FullStack"/>
        <meta property="og:description" content="Adrien KISSIE est un développeur web et streamer sur twitch, spécialiste en frontend et backend."/>
        <meta property="og:image" content="https://fredkiss.dev/favicon.ico" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://fredkiss.dev/"/>
        <meta property="twitter:title" content="Adrien KISSIE | Développeur FullStack"/>
        <meta property="twitter:description" content="Adrien KISSIE est un développeur web et streamer sur twitch, spécialiste en frontend et backend."/>
        <meta property="twitter:image" content="https://fredkiss.dev/favicon.ico" />
      </Head>

      <Header />

      <main className="space-y-8">
        <StartingSection />
        <SkillsSection skills={props.skills} />
        <ExperienceSection experiences={props.experiences} />
        <ProjectSection projects={props.projects} />
      </main>

      <Footer />
    </div>
  );
};

function StartingSection() {
  return (
    <section
      className={clsx(
        "pt-20 flex flex-col gap-4 px-4 bg-light",
        "md:px-8 md:relative md:pt-48",
        "lg:pt-52 lg:px-10"
      )}
    >
      <div
        className={clsx(
          "max-w-[1280px] mx-auto grid gap-4",
          "md:grid-cols-2 md:gap-20 md:absolute md:top-28 md:left-8 md:right-8",
          "lg:top-32"
        )}
      >
        <h1
          className={clsx("text-4xl font-bold leading-relaxed", "lg:text-5xl")}
        >
          Hello world, je suis Adrien KISSIE
        </h1>

        <p className="md:text-right lg:text-lg">
          Développeur web et streamer sur&nbsp;
          <a
            href="https://twitch.tv/fredkisss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            twitch
          </a>
          , je crée des applications web orientées performance du&nbsp;
          <strong className="font-bold">backend</strong> au&nbsp;
          <strong className="font-bold">frontend</strong>.
        </p>
      </div>

      <div
        className={clsx(
          "relative h-96 overflow-hidden",
          "md:h-[450px] lg:h-[600px]"
        )}
      >
        <div
          className={clsx(
            "absolute bottom-0 w-[350px] left-1/2 -translate-x-1/2",
            "md:w-[430px] md:-bottom-5",
            "lg:w-[550px]"
          )}
        >
          <img
            src="/brush-stroke-1.png"
            alt="brush stroke"
            className="rotate-12"
            style={{
              filter:
                "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
            }}
          />
          <img
            src="/brush-stroke-2.png"
            alt="brush stroke"
            className="-rotate-[20deg]"
            style={{
              filter:
                "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
            }}
          />
          <img
            src="/brush-stroke-3.png"
            alt="brush stroke"
            className="-rotate-[25deg]"
            style={{
              filter:
                "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
            }}
          />
        </div>

        <Image
          src={`/adrien.png`}
          objectFit="contain"
          objectPosition="bottom"
          alt="Photo de Adrien KISSIE"
          className="h-full"
        />
      </div>
    </section>
  );
}

function ProjectSection({ projects }: { projects: MarkdownData<Project>[] }) {
  return (
    <section className="bg-white py-8 px-8 lg:px-10" id="projects">
      <h2
        className={clsx(
          "text-center font-bold text-2xl mb-4",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}
      >
        Mes projets
      </h2>
      <p className="text-center mb-4">
        Retrouvez ici les joujous qui font ma fierté.
      </p>

      <ul className="grid gap-10 max-w-[1280px] mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceSection({
  experiences,
}: {
  experiences: MarkdownData<Experience>[];
}) {
  return (
    <section
      className={clsx("bg-light py-4 px-4", "md:px-8", "lg:px-10")}
      id="experience"
    >
      <h2
        className={clsx(
          "text-center font-bold text-2xl my-4",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}
      >
        Mon Expérience Professionnelle
      </h2>

      <ul className="max-w-[1280px] mx-auto">
        {experiences.map((exp, i) => (
          <ExperienceTimeline key={i} {...exp} />
        ))}
      </ul>
    </section>
  );
}

type Skills = `frontend` | `backend` | `integration`;

function SkillsSection({ skills }: { skills: MarkdownData<Skill>[] }) {
  const [currentSkill, setCurrentSkill] = React.useState<Skills>(`frontend`);

  const components = {
    h3: (props: any) => (
      <h3
        {...props}
        className={`text-xl font-bold md:text-2xl lg:text-3xl md:mb-4`}
      />
    ),
  };

  return (
    <section className={clsx(`bg-white py-8 px-8`, `lg:px-10`)} id={`skills`}>
      <h2
        className={clsx(
          "text-center font-bold text-2xl mb-4",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}
      >
        En quoi je peux vous aider ?
      </h2>

      <div
        className={clsx(
          "max-w-[1280px] mx-auto grid gap-4",
          "md:grid-cols-2 md:place-items-center md:gap-14",
          "lg:grid-cols-12"
        )}
      >
        <ul className={clsx(`flex flex-col gap-4 w-full`, `lg:col-span-5`)}>
          <li>
            <CompetenceCard
              title={`Frontend`}
              selected={currentSkill === `frontend`}
              icon={DesktopComputerIcon}
              onClick={() => setCurrentSkill(`frontend`)}
            />
          </li>
          <li>
            <CompetenceCard
              title={`Backend`}
              icon={ChipIcon}
              selected={currentSkill === `backend`}
              onClick={() => setCurrentSkill(`backend`)}
              iconColor={`tertiary`}
            />
          </li>
          <li>
            <CompetenceCard
              title={`Intégration HTML`}
              icon={PhotographIcon}
              selected={currentSkill === `integration`}
              onClick={() => setCurrentSkill(`integration`)}
              iconColor={`secondary`}
            />
          </li>
        </ul>

        <div className={clsx(`my-4`, `lg:col-span-7`)}>
          {skills.map(({ serializedContent, data }) => (
            <div
              className={clsx(`transition duration-200 flex flex-col gap-4`, {
                hidden: currentSkill !== data.id,
              })}
              key={data.name}
            >
              <MDXRemote {...serializedContent} components={components} />

              <ul className="flex gap-2 flex-wrap md:mt-4">
                {data.technologies.map((tech) => (
                  <li key={tech}>
                    <Tag color="secondary">{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getExperiences();
  const projects = await getProjects();
  const skills = await getSkills();

  return {
    props: {
      experiences: data.sort((a, b) => {
        return (
          new Date(b.data.startDate).getTime() -
          new Date(a.data.startDate).getTime()
        );
      }),
      projects: projects.sort((a, b) => {
        return (
          new Date(a.data.startDate).getTime() -
          new Date(b.data.startDate).getTime()
        );
      }),
      skills,
    },
  };
};
