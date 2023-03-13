// components
import Image from "next/image";
import {
  Tabs,
  TabsBody,
  TabsHeader,
  TabsHeaderItem,
  TabsItem,
} from "~/components/tabs";
import { CpuChipIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { MdxBody } from "~/components/mdx";
import { Tag } from "~/components/tag";
import { Cta } from "~/components/cta";

// utils
import photoImgURL from "../public/adrien.png";
import brush1ImgURL from "../public/brush-stroke-1.png";
import brush2ImgURL from "../public/brush-stroke-2.png";
import brush3ImgURL from "../public/brush-stroke-3.png";
import { clsx } from "~/lib/webutils";
import { allSkills, allExperiences } from "contentlayer/generated";

// types
import type { Skill } from "contentlayer/generated";
import { ExperienceTimeline } from "~/components/experience-timeline";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-light px-4" id="hero">
      <div
        className={clsx(
          "mx-auto grid max-w-[1200px] gap-8",
          "pt-20 md:relative md:grid-cols-2 md:px-8 md:pt-32",
          "lg:px-10"
        )}>
        <div
          className={clsx(
            "flex flex-col gap-4 lg:gap-8 lg:pt-20",
            "md:gap-6 xl:my-auto xl:pt-0 xl:pb-20"
          )}>
          <h1
            className={clsx(
              "text-4xl font-bold leading-relaxed",
              "lg:text-5xl"
            )}>
            Hello world, je suis Adrien KISSIE
          </h1>

          <p className=" lg:text-lg">
            Développeur web et streamer sur&nbsp;
            <a
              href="https://twitch.tv/fredkisss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline">
              twitch
            </a>
            , je crée des applications web orientées performance du&nbsp;
            <strong className="font-bold">backend</strong> au&nbsp;
            <strong className="font-bold">frontend</strong>.
          </p>

          <Cta className="self-start" />
        </div>

        <div
          className={clsx(
            "relative h-96 overflow-y-clip overflow-x-visible",
            "md:h-[450px] lg:h-[600px]"
          )}>
          <div
            className={clsx(
              "absolute bottom-0 left-1/2 w-[350px] -translate-x-1/2",
              "md:-bottom-5 md:w-[430px]",
              "lg:w-[550px]"
            )}>
            <Image
              src={brush1ImgURL}
              alt="brush stroke"
              className="rotate-12"
              height={250}
              width={500}
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
            <Image
              src={brush2ImgURL}
              alt="brush stroke"
              height={250}
              width={500}
              className="-rotate-[20deg]"
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
            <Image
              src={brush3ImgURL}
              alt="brush stroke"
              height={250}
              width={500}
              className="-rotate-[25deg]"
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
          </div>

          <Image
            src={photoImgURL}
            priority
            width={500}
            height={500}
            alt="Photo de Adrien KISSIE"
            className="relative z-10 mx-auto h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = allSkills.sort((a, b) => a.id - b.id);

  function getIcon(icon: Skill["icon"], className: string) {
    switch (icon) {
      case "computer":
        return <ComputerDesktopIcon className={className} />;
      case "cpu":
        return <CpuChipIcon className={className} />;
      case "photo":
        return <PhotoIcon className={className} />;
      default:
        throw new Error("Icon type not supported");
    }
  }

  return (
    <section
      className={clsx(`scroll-mt-20 bg-white py-8 px-8`, `lg:px-10`)}
      id={`skills`}>
      <h2
        className={clsx(
          "mb-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        En quoi je peux vous aider ?
      </h2>

      <Tabs>
        <TabsHeader>
          {skills.map(skill => (
            <TabsHeaderItem
              key={`tab-headeritem-${skill.id}`}
              icon={getIcon(skill.icon, `h-6 w-6`)}
              iconColor={skill.iconColor}>
              {skill.name}
            </TabsHeaderItem>
          ))}
        </TabsHeader>

        <TabsBody>
          {skills.map(skill => (
            <TabsItem key={`tab-item-${skill.id}`}>
              <MdxBody type="div" content={skill.body.code} />
              <ul className="flex flex-wrap gap-2 md:mt-4">
                {skill.technologies.map(tech => (
                  <li key={tech}>
                    <Tag color="secondary">{tech}</Tag>
                  </li>
                ))}
              </ul>
            </TabsItem>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

function ExperienceSection() {
  const experiences = allExperiences.sort(
    (a, b) => new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf()
  );

  return (
    <section
      className={clsx("scroll-mt-20 bg-light py-4 px-4", "md:px-8", "lg:px-10")}
      id="experience">
      <h2
        className={clsx(
          "my-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        Mon Expérience Professionnelle
      </h2>

      <ul className="mx-auto max-w-[1280px]">
        {experiences.map((exp, i) => (
          <ExperienceTimeline key={i} experience={exp} />
        ))}
      </ul>
    </section>
  );
}
