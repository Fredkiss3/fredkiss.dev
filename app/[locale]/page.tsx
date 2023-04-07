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
import { MdxBody } from "~/components/mdx-body";
import { Tag } from "~/components/tag";
import { Cta } from "~/components/cta";
import { ExperienceTimeline } from "~/components/experience-timeline";
import { ProjectCardSlider } from "~/components/project-card-slider";
import ReactMarkdown from "react-markdown";

// utils
import photoImgURL from "../../public/adrien.png";
import brush1ImgURL from "../../public/brush-stroke-1.png";
import brush2ImgURL from "../../public/brush-stroke-2.png";
import brush3ImgURL from "../../public/brush-stroke-3.png";
import { clsx } from "~/lib/functions";
import { allSkills, allExperiences, allProjects } from "contentlayer/generated";
import { getDictionary } from "~/lib/get-dictionnaries";

// types
import type { Skill } from "contentlayer/generated";
import type { TranslationDictionary, Lang } from "~/lib/get-dictionnaries";
import type { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { locale: Lang };
}): Metadata {
  return {
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: { locale: Lang };
}) {
  const dict = await getDictionary(params.locale);
  return (
    <main>
      <HeroSection t={dict} />
      <SkillsSection t={dict} locale={params.locale} />
      <ExperienceSection t={dict} locale={params.locale} />
      <ProjectSection t={dict} locale={params.locale} />
    </main>
  );
}

function HeroSection({ t }: { t: TranslationDictionary }) {
  const components = {
    a: (props: any) => (
      <a
        href="https://twitch.tv/fredkisss"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
        {...props}
      />
    ),
  };
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
            {t.hero.title}
          </h1>

          <ReactMarkdown className="lg:text-lg" components={components}>
            {t.hero.subtitle}
          </ReactMarkdown>

          <Cta className="self-start">{t.hero.cta}</Cta>
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
              className="w-[500px] rotate-12"
              height={250}
              width={250}
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
            <Image
              src={brush2ImgURL}
              alt="brush stroke"
              height={250}
              width={250}
              className="w-[500px] -rotate-[20deg]"
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
            <Image
              src={brush3ImgURL}
              alt="brush stroke"
              height={250}
              width={250}
              className="w-[500px] -rotate-[25deg]"
              style={{
                filter:
                  "invert(24%) sepia(56%) saturate(3292%) hue-rotate(161deg) brightness(86%) contrast(102%)",
              }}
            />
          </div>

          <Image
            src={photoImgURL}
            priority
            suppressHydrationWarning
            width={500}
            height={500}
            sizes="(min-width: 640px) 50vw, 384px"
            alt="Photo de Adrien KISSIE"
            className="relative z-10 mx-auto h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

function SkillsSection({
  t,
  locale,
}: {
  t: TranslationDictionary;
  locale: Lang;
}) {
  const skills = allSkills
    .filter(skill => skill.lang === locale)
    .sort((a, b) => a.id - b.id);

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
      className={clsx(`scroll-mt-20 bg-white py-16 px-8`, `lg:px-10`)}
      id={`skills`}>
      <h2
        className={clsx(
          "mb-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        {t.skills.title}
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

function ExperienceSection({
  t,
  locale,
}: {
  t: TranslationDictionary;
  locale: Lang;
}) {
  const experiences = allExperiences
    .filter(xp => xp.lang === locale)
    .sort(
      (a, b) =>
        new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf()
    );

  return (
    <section
      className={clsx(
        "scroll-mt-20 bg-light py-16 px-4",
        "md:px-8",
        "lg:px-10"
      )}
      id="experience">
      <h2
        className={clsx(
          "my-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        {t.experience.title}
      </h2>

      <ul className="mx-auto max-w-[1280px]">
        {experiences.map((exp, i) => (
          <ExperienceTimeline key={i} experience={exp} locale={locale} />
        ))}
      </ul>
    </section>
  );
}

function ProjectSection({
  t,
  locale,
}: {
  t: TranslationDictionary;
  locale: Lang;
}) {
  const projects = allProjects
    .filter(p => p.lang === locale)
    .sort(
      (a, b) =>
        new Date(b.startDate).valueOf() - new Date(a.startDate).valueOf()
    )
    .map(p => ({
      ...p,
      mdx: <MdxBody content={p.body.code} />,
    }));

  return (
    <section
      id="projects"
      className={clsx(
        "scroll-mt-20 bg-white py-16 px-4",
        "md:px-8",
        "lg:px-10"
      )}>
      <h2
        className={clsx(
          "my-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        {t.projects.title}
      </h2>
      <ProjectCardSlider projects={projects} t={t} />
    </section>
  );
}
