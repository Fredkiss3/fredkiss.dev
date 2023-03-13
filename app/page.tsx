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

// utils
import { clsx } from "~/lib/webutils";
import photoImgURL from "../public/adrien.png";
import brush1ImgURL from "../public/brush-stroke-1.png";
import brush2ImgURL from "../public/brush-stroke-2.png";
import brush3ImgURL from "../public/brush-stroke-3.png";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="bg-light px-4" id="hero">
      <div
        className={clsx(
          "mx-auto grid max-w-[1200px] gap-4",
          "pt-20 md:relative md:grid-cols-2 md:px-8 md:pt-32",
          "lg:px-10"
        )}>
        <div
          className={clsx(
            "flex flex-col gap-4 lg:gap-8 lg:pt-20",
            "xl:my-auto xl:pt-0 xl:pb-20"
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
  return (
    <section className={clsx(`bg-white py-8 px-8`, `lg:px-10`)} id={`skills`}>
      <h2
        className={clsx(
          "mb-4 text-center text-2xl font-bold",
          "md:mb-8 md:text-3xl lg:text-4xl"
        )}>
        En quoi je peux vous aider ?
      </h2>

      <Tabs>
        <TabsHeader>
          <TabsHeaderItem icon={<CpuChipIcon className={`h-6 w-6`} />}>
            Frontend
          </TabsHeaderItem>
          <TabsHeaderItem
            icon={<ComputerDesktopIcon className={`h-6 w-6`} />}
            iconColor={`tertiary`}>
            Backend
          </TabsHeaderItem>
          <TabsHeaderItem
            icon={<PhotoIcon className={`h-6 w-6`} />}
            iconColor={`secondary`}>
            Intégration HTML
          </TabsHeaderItem>
        </TabsHeader>

        <TabsBody>
          <TabsItem>frontend</TabsItem>
          <TabsItem>backend</TabsItem>
          <TabsItem>Intégration</TabsItem>
        </TabsBody>
      </Tabs>
    </section>
  );
}
