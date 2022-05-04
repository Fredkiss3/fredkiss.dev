/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import * as React from "react";

// import { MDXRemote } from "next-mdx-remote";
import { getExperiences } from "../lib/functions";
import { Experience, MarkdownData } from "../lib/types";
import Image from "next/image";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ExperienceTimeline } from "../components/experience";

type HomePageProps = {
  experiences: MarkdownData<Experience>[];
};

const Home: NextPage<HomePageProps> = (props) => {
  React.useEffect(() => {
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
    <div className={`container`}>
      <Head>
        <title>Adrien KISSIE - Portfolio</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="bg-light px-4 mt-[4.2rem] pt-10">
        <StartingSection />
        <ProjectSection />
        <ExperienceSection experiences={props.experiences} />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

function StartingSection() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold leading-relaxed">
        Hello world, je suis Adrien KISSIE
      </h1>

      <p>
        Développeur web et streamer sur&nbsp;
        <a
          href="https://twitch.tv/fredkisss"
          target={`_blank`}
          className="text-primary underline"
        >
          twitch
        </a>
        , je crée des applications web orientées performance du{" "}
        <strong className="font-bold">backend</strong> au{" "}
        <strong className="font-bold">frontend</strong>.
      </p>

      <div className="relative h-96 overflow-hidden">
        <div className="absolute top-10 left-0 right-0">
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
          src="/adrien.png"
          layout="fill"
          objectFit="cover"
          alt="Photo de Adrien KISSIE"
        />
      </div>
    </section>
  );
}

function ProjectSection() {
  return <section></section>;
}

function ExperienceSection({
  experiences,
}: {
  experiences: MarkdownData<Experience>[];
}) {
  return (
    <section className="bg-light py-4 px-4" id="experience">
      <h2 className="text-center font-bold text-2xl mb-4">
        Expériences Professionnelles
      </h2>

      {experiences.map((exp, i) => (
        <ExperienceTimeline key={i} {...exp} />
      ))}
    </section>
  );
}

function AboutSection() {
  return <section></section>;
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getExperiences();

  return {
    props: {
      experiences: data.sort((a, b) => {
        return (
          new Date(b.data.startDate).getTime() -
          new Date(a.data.startDate).getTime()
        );
      }),
    },
  };
};
