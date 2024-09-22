import * as React from "react";

export const Icons = [
  "call",
  "facebook",
  "tchat",
  "youtube",
  "linkedin",
  "twitter",
  "home",
  "clock",
  "play",
  "play-solid",
  "like",
  "clock-color",
  "user",
  "lock",
  "menu",
  "phone",
  "close",
  "arrow-down",
  "arrow-up",
  "market",
  "book",
  "question",
  "mail",
  "adjust",
  "speaker",
  "arrow-right",
  "arrow-left",
  "arrow-right-alt",
  "arrow-left-alt",
  "arrow-down-dots",
  "arrow-up-dots",
  "instagram",
  "address",
  "github",
  "twitch",
] as const;

export interface IconProps {
  icon: typeof Icons[number];
  className?: string;
  alt?: string;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  className = "",
  ariaLabel = icon,
}) => {
  const svgs = {
    call: () => (
      <CallSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    like: () => (
      <LikeSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    "clock-color": () => (
      <ColorClockIcon className={`fill-current ${className}`} />
    ),
    facebook: () => (
      <FacebookSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    instagram: () => (
      <InstagramLogoSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    user: () => (
      <UserSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    "arrow-down": () => (
      <ArrowDownSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    "arrow-down-dots": () => (
      <ArrowDownDotSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    "arrow-up-dots": () => (
      <ArrowUpDotSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    "arrow-up": () => (
      <ArrowUpSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    address: () => (
      <AddressSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),

    menu: () => (
      <MenuSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    market: () => (
      <MarketSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    adjust: () => (
      <AdjustSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    book: () => <BookSvg aria-label={ariaLabel} className={`${className}`} />,
    "arrow-right": () => (
      <ArrowRightSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    "arrow-left": () => (
      <ArrowLeftSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    "arrow-right-alt": () => (
      <ArrowRightAltSVG aria-label={ariaLabel} className={`${className}`} />
    ),
    "arrow-left-alt": () => (
      <ArrowLeftAltSVG aria-label={ariaLabel} className={`${className}`} />
    ),
    question: () => (
      <QuestionSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    speaker: () => (
      <SpeakerSvg aria-label={ariaLabel} className={`${className}`} />
    ),
    mail: () => <MailSvg aria-label={ariaLabel} className={`${className}`} />,
    phone: () => <PhoneSvg aria-label={ariaLabel} className={`${className}`} />,
    lock: () => (
      <LockSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    close: () => (
      <CloseSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    tchat: () => (
      <TchatSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    youtube: () => (
      <YoutubeSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    linkedin: () => (
      <LinkedinSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    github: () => (
      <GithubSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    twitch: () => (
      <TwitchSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    twitter: () => (
      <TwitterSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    home: () => (
      <HomeSvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    clock: () => (
      <ClockSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
    play: () => (
      <PlaySvg aria-label={ariaLabel} className={`fill-current ${className}`} />
    ),
    "play-solid": () => (
      <PlaySolidSvg
        aria-label={ariaLabel}
        className={`fill-current ${className}`}
      />
    ),
  };

  const SvgIcon = svgs[icon];

  return (
    <>
      <SvgIcon />
    </>
  );
};

export default Icon;

// svg values for each icon
const TwitchSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
  </svg>
);

const GithubSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
  </svg>
);
const AddressSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramLogoSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="instagram"
    role="img"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
    />
  </svg>
);

const ArrowLeftAltSVG: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const ArrowRightAltSVG: React.FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const ArrowLeftSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowUpDotSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={33.538}
    height={44.962}
    viewBox="0 0 33.538 44.962"
  >
    <g
      data-name="Groupe 660"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={4}
    >
      <path data-name="Trac\xE9 879" d="M16.768 33.165v-4.086" />
      <path data-name="Trac\xE9 883" d="M16.768 42.962v-4.086" />
      <path data-name="Trac\xE9 880" d="M16.768 22.207V2.827" />
      <path
        data-name="Trac\xE9 881"
        d="M30.71 16.29L16.776 2.82"
        strokeWidth={3.99996}
      />
      <path
        data-name="Trac\xE9 882"
        d="M2.835 16.297L16.769 2.828"
        strokeWidth={3.99996}
      />
    </g>
  </svg>
);

const ArrowDownDotSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={33.538}
    height={44.962}
    viewBox="0 0 33.538 44.962"
  >
    <g
      data-name="Groupe 769"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={4}
    >
      <path data-name="Trac\xE9 879" d="M16.77 11.797v4.086" />
      <path data-name="Trac\xE9 883" d="M16.77 2v4.086" />
      <path data-name="Trac\xE9 880" d="M16.77 22.754v19.38" />
      <path
        data-name="Trac\xE9 881"
        d="M2.828 28.671l13.934 13.47"
        strokeWidth={3.99996}
      />
      <path
        data-name="Trac\xE9 882"
        d="M30.703 28.665L16.77 42.134"
        strokeWidth={3.99996}
      />
    </g>
  </svg>
);

const ArrowRightSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const PhoneSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const SpeakerSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 54 54"
    // style={{ enableBackground: 'new 0 0 54 54' }}
    {...props}
  >
    <g>
      <rect x="-0.2" y="0.1" width="53.8" height="53.4" />
      <path d="M48.1,26.3c0,4.3,0,7.2-0.1,8.8c-0.2,3.9-1.3,6.9-3.5,9s-5.1,3.3-9,3.5c-1.6,0.1-4.6,0.1-8.8,0.1c-4.3,0-7.2,0-8.8-0.1   c-3.9-0.2-6.9-1.3-9-3.5c-2.1-2.1-3.3-5.1-3.5-9c-0.1-1.6-0.1-4.6-0.1-8.8s0-7.2,0.1-8.8c0.2-3.9,1.3-6.9,3.5-9   c2.1-2.1,5.1-3.3,9-3.5c1.6-0.1,4.6-0.1,8.8-0.1c4.3,0,7.2,0,8.8,0.1c3.9,0.2,6.9,1.3,9,3.5s3.3,5.1,3.5,9   C48,19.1,48.1,22,48.1,26.3z M28.8,8.7c-1.3,0-2,0-2.1,0c-0.1,0-0.8,0-2.1,0c-1.3,0-2.3,0-2.9,0c-0.7,0-1.6,0-2.7,0.1   c-1.1,0-2.1,0.1-2.9,0.3c-0.8,0.1-1.5,0.3-2,0.5c-0.9,0.4-1.7,0.9-2.5,1.6c-0.7,0.7-1.2,1.5-1.6,2.5c-0.2,0.5-0.4,1.2-0.5,2   s-0.2,1.7-0.3,2.9c0,1.1-0.1,2-0.1,2.7c0,0.7,0,1.7,0,2.9c0,1.3,0,2,0,2.1s0,0.8,0,2.1c0,1.3,0,2.3,0,2.9c0,0.7,0,1.6,0.1,2.7   c0,1.1,0.1,2.1,0.3,2.9s0.3,1.5,0.5,2c0.4,0.9,0.9,1.7,1.6,2.5c0.7,0.7,1.5,1.2,2.5,1.6c0.5,0.2,1.2,0.4,2,0.5   c0.8,0.1,1.7,0.2,2.9,0.3s2,0.1,2.7,0.1c0.7,0,1.7,0,2.9,0c1.3,0,2,0,2.1,0c0.1,0,0.8,0,2.1,0c1.3,0,2.3,0,2.9,0   c0.7,0,1.6,0,2.7-0.1c1.1,0,2.1-0.1,2.9-0.3c0.8-0.1,1.5-0.3,2-0.5c0.9-0.4,1.7-0.9,2.5-1.6c0.7-0.7,1.2-1.5,1.6-2.5   c0.2-0.5,0.4-1.2,0.5-2c0.1-0.8,0.2-1.7,0.3-2.9c0-1.1,0.1-2,0.1-2.7c0-0.7,0-1.7,0-2.9c0-1.3,0-2,0-2.1s0-0.8,0-2.1   c0-1.3,0-2.3,0-2.9c0-0.7,0-1.6-0.1-2.7c0-1.1-0.1-2.1-0.3-2.9c-0.1-0.8-0.3-1.5-0.5-2c-0.4-0.9-0.9-1.7-1.6-2.5   c-0.7-0.7-1.5-1.2-2.5-1.6c-0.5-0.2-1.2-0.4-2-0.5c-0.8-0.1-1.7-0.2-2.9-0.3c-1.1,0-2-0.1-2.7-0.1C31.1,8.7,30.1,8.7,28.8,8.7z    M34.4,18.5c2.1,2.1,3.2,4.7,3.2,7.8s-1.1,5.6-3.2,7.8c-2.1,2.1-4.7,3.2-7.8,3.2c-3.1,0-5.6-1.1-7.8-3.2c-2.1-2.1-3.2-4.7-3.2-7.8   s1.1-5.6,3.2-7.8c2.1-2.1,4.7-3.2,7.8-3.2C29.7,15.3,32.3,16.3,34.4,18.5z M31.7,31.3c1.4-1.4,2.1-3.1,2.1-5s-0.7-3.7-2.1-5.1   c-1.4-1.4-3.1-2.1-5.1-2.1c-2,0-3.7,0.7-5.1,2.1s-2.1,3.1-2.1,5.1s0.7,3.7,2.1,5c1.4,1.4,3.1,2.1,5.1,2.1   C28.6,33.4,30.3,32.7,31.7,31.3z M39.9,13c0.5,0.5,0.8,1.1,0.8,1.8c0,0.7-0.3,1.3-0.8,1.8c-0.5,0.5-1.1,0.8-1.8,0.8   s-1.3-0.3-1.8-0.8c-0.5-0.5-0.8-1.1-0.8-1.8c0-0.7,0.3-1.3,0.8-1.8c0.5-0.5,1.1-0.8,1.8-0.8S39.4,12.5,39.9,13z" />
    </g>
  </svg>
);

const AdjustSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

const MarketSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const QuestionSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const MailSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const BookSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const ArrowDownSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowUpSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      fillRule="evenodd"
      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const LikeSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <path d="M512,304c0-12.8-5.1-24.8-13.9-33.6c10-10.9,15-25.5,13.7-40.7c-2.5-27.1-26.9-48.4-55.6-48.4H324.4 c6.5-19.8,17-56.1,17-85.3c0-46.3-39.3-85.3-64-85.3c-22.1,0-38,12.5-38.7,13c-2.5,2-4,5.1-4,8.3v72.3l-61.5,133.1l-2.5,1.3v-4.1 c0-5.9-4.8-10.7-10.7-10.7H53.3C23.9,224,0,247.9,0,277.3V448c0,29.4,23.9,53.3,53.3,53.3h64c23.1,0,42.8-14.7,50.2-35.3 c17.8,9.1,41.6,13.9,56.5,13.9h195.8c23.2,0,43.6-15.7,48.3-37.2c2.5-11.1,1-22.3-3.8-32.1c15.7-7.9,26.3-24.2,26.3-42.7 c0-7.6-1.7-14.8-5-21.3C501.4,338.8,512,322.5,512,304z M467,330.3c-4.1,0.5-7.6,3.3-8.9,7.2c-1.3,3.9-0.2,8.3,2.8,11.1 c5.4,5.1,8.4,12,8.4,19.3c0,13.5-10.2,24.8-23.6,26.3c-4.1,0.5-7.6,3.3-8.9,7.2c-1.3,3.9-0.2,8.3,2.8,11.1 c7,6.6,9.8,15.9,7.7,25.5c-2.6,11.9-14.2,20.5-27.5,20.5H224c-17.3,0-46.4-8.1-56.4-18.2c-3.1-3-7.7-3.9-11.6-2.3 c-4,1.6-6.6,5.5-6.6,9.9c0,17.6-14.4,32-32,32h-64c-17.6,0-32-14.4-32-32V277.3c0-17.6,14.4-32,32-32h96V256 c0,3.7,1.9,7.1,5.1,9.1c3.1,1.9,7,2.1,10.4,0.4l21.3-10.7c2.2-1.1,3.9-2.9,4.9-5.1l64-138.7c0.6-1.4,1-2.9,1-4.5V37.8 c4.4-2.5,12.1-5.8,21.3-5.8C289,32,320,61.1,320,96c0,37.5-20.4,91.7-20.6,92.2c-1.2,3.3-0.8,7,1.2,9.9c2,2.9,5.3,4.6,8.8,4.6 h146.8c17.8,0,32.9,12.7,34.4,29c1.1,12.2-4.7,23.7-15.2,30.2c-3.3,2-5.2,5.6-5.1,9.5s2.4,7.3,5.8,9.1c9,4.6,14.6,13.6,14.6,23.6 C490.7,317.5,480.5,328.8,467,330.3z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M160,245.3c-5.9,0-10.7,4.8-10.7,10.7v192c0,5.9,4.8,10.7,10.7,10.7s10.7-4.8,10.7-10.7V256 C170.7,250.1,165.9,245.3,160,245.3z" />
      </g>
    </g>
  </svg>
);

const ColorClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 368 368"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">
      {"\n\t.st0{fill:#003440;}\n\t.st1{fill:#FDB631;}\n"}
    </style>
    <g>
      <g>
        <g>
          <path
            className="st0"
            d="M184,60c4.4,0,8-3.6,8-8v-4c0-4.4-3.6-8-8-8s-8,3.6-8,8v4C176,56.4,179.6,60,184,60z"
          />
          <path
            className="st0"
            d="M184,308c-4.4,0-8,3.6-8,8v4c0,4.4,3.6,8,8,8s8-3.6,8-8v-4C192,311.6,188.4,308,184,308z"
          />
          <path
            className="st0"
            d="M52,176h-4c-4.4,0-8,3.6-8,8s3.6,8,8,8h4c4.4,0,8-3.6,8-8S56.4,176,52,176z"
          />
          <path
            className="st0"
            d="M320,176h-4c-4.4,0-8,3.6-8,8s3.6,8,8,8h4c4.4,0,8-3.6,8-8S324.4,176,320,176z"
          />
          <path
            className="st0"
            d="M93.6,82.4c-3.2-3.2-8-3.2-11.2,0s-3.2,8,0,11.2l2.8,2.8c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4 c3.2-3.2,3.2-8,0-11.2L93.6,82.4z"
          />
          <path
            className="st0"
            d="M85.2,271.6l-2.8,2.8c-3.2,3.2-3.2,8,0,11.2C84,287.2,86,288,88,288s4-0.8,5.6-2.4l2.8-2.8 c3.2-3.2,3.2-8,0-11.2S88.4,268.4,85.2,271.6z"
          />
          <path
            className="st0"
            d="M274.4,82.4l-2.8,2.8c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4l2.8-2.8 c3.2-3.2,3.2-8,0-11.2C282.4,79.2,277.6,79.2,274.4,82.4z"
          />
          <path
            className="st0"
            d="M192,180.8V108c0-4.4-3.6-8-8-8s-8,3.6-8,8v76c0,2,0.8,4,2.4,5.6l87.6,87.6c1.6,1.6,3.6,2.4,5.6,2.4 s4-0.8,5.6-2.4c3.2-3.2,3.2-8,0-11.2L192,180.8z"
          />
          <path
            className="st1"
            d="M184,0C82.4,0,0,82.4,0,184s82.4,184,184,184s184-82.4,184-184S285.6,0,184,0z M184,352 c-92.8,0-168-75.2-168-168S91.2,16,184,16s168,75.2,168,168S276.8,352,184,352z"
          />
        </g>
      </g>
    </g>
  </svg>
);

const PlaySolidSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.92 47.92">
    <g data-name="Groupe 529" transform="translate(-942 -579)">
      <circle
        data-name="Ellipse 77"
        cx={23.96}
        cy={23.96}
        r={23.96}
        transform="translate(942 579)"
        fill="#009fa1"
      />
      <g data-name="play-button (2)">
        <g data-name="Groupe 301">
          <path
            data-name="Trac\xE9 281"
            d="M960.833 611.214a.833.833 0 01-.833-.833v-14.569a.833.833 0 01.833-.832l13.528 7.492a.865.865 0 010 1.249c-.625.625-13.528 7.493-13.528 7.493z"
            fill="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

const PlaySvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.92 47.92">
    <g data-name="Groupe 529" transform="translate(-942 -579)">
      <circle
        data-name="Ellipse 77"
        cx={23.96}
        cy={23.96}
        r={23.96}
        transform="translate(942 579)"
        fill="#00000000"
      />
      <g data-name="play-button (2)">
        <g data-name="Groupe 301">
          <path
            data-name="Trac\xE9 281"
            d="M960.833 611.214a.833.833 0 01-.833-.833v-14.569a.833.833 0 01.833-.832l13.528 7.492a.865.865 0 010 1.249c-.625.625-13.528 7.493-13.528 7.493z"
            fill="currentColor"
          />
        </g>
      </g>
    </g>
  </svg>
);

const ClockSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor">
    <path d="M256,0C114.8,0,0,114.8,0,256s114.8,256,256,256s256-114.8,256-256S397.2,0,256,0z M256,480 C132.5,480,32,379.5,32,256S132.5,32,256,32s224,100.5,224,224S379.5,480,256,480L256,480z" />
    <path d="M272,96h-32v166.6l100.7,100.7l22.6-22.6L272,249.4V96z" />
  </svg>
);

const HomeSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const CallSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.14 37.194">
    <g
      id="prefix__phone-call_1_"
      data-name="phone-call (1)"
      transform="translate(-.344)"
    >
      <g
        id="prefix__Groupe_200"
        data-name="Groupe 200"
        transform="translate(.344)"
      >
        <path
          id="prefix__Trac\xE9_121"
          data-name="Trac\xE9 121"
          className={props.className}
          d="M29.713 48.3a3.658 3.658 0 00-2.653-1.217 3.783 3.783 0 00-2.685 1.209l-2.481 2.468c-.2-.11-.408-.212-.6-.314a9.784 9.784 0 01-.777-.416 26.961 26.961 0 01-6.461-5.888 15.906 15.906 0 01-2.12-3.344c.644-.589 1.24-1.2 1.821-1.79.22-.22.44-.447.659-.667a3.6 3.6 0 000-5.432l-2.146-2.143c-.243-.243-.495-.495-.73-.746a37.033 37.033 0 00-1.476-1.46 3.716 3.716 0 00-2.63-1.154 3.845 3.845 0 00-2.669 1.154l-.016.016-2.669 2.692a5.743 5.743 0 00-1.7 3.65 13.761 13.761 0 001 5.825A33.8 33.8 0 007.387 50.76a36.942 36.942 0 0012.3 9.632 19.166 19.166 0 006.913 2.041c.165.008.338.016.495.016A5.915 5.915 0 0031.62 60.5c.008-.016.024-.024.031-.039a17.847 17.847 0 011.374-1.421c.338-.322.683-.659 1.021-1.013a3.916 3.916 0 001.185-2.716 3.773 3.773 0 00-1.209-2.693zm2.81 8.266c-.008 0-.008.008 0 0-.306.33-.62.628-.958.958a20.643 20.643 0 00-1.515 1.57 3.784 3.784 0 01-2.95 1.243c-.118 0-.243 0-.361-.008a17.026 17.026 0 01-6.123-1.837 34.871 34.871 0 01-11.588-9.074 31.87 31.87 0 01-5.652-9.412 11.209 11.209 0 01-.876-4.915 3.6 3.6 0 011.08-2.331l2.677-2.677a1.784 1.784 0 011.193-.557 1.679 1.679 0 011.146.55l.024.024c.479.447.934.911 1.413 1.405.243.251.495.5.746.761l2.143 2.143a1.5 1.5 0 010 2.434c-.228.228-.447.455-.675.675-.659.675-1.287 1.3-1.97 1.915-.016.016-.031.024-.039.039a1.6 1.6 0 00-.408 1.782l.024.071a17.206 17.206 0 002.536 4.137l.008.008a28.813 28.813 0 006.971 6.343 10.716 10.716 0 00.966.526c.283.141.55.275.777.416.031.016.063.039.094.055a1.7 1.7 0 00.777.2 1.678 1.678 0 001.193-.542l2.685-2.685a1.776 1.776 0 011.185-.589 1.6 1.6 0 011.13.573l.016.016 4.323 4.317a1.552 1.552 0 01.008 2.461z"
          transform="translate(-.344 -25.255)"
        />
        <path
          id="prefix__Trac\xE9_122"
          data-name="Trac\xE9 122"
          className={props.className}
          d="M245.816 88.028a10.1 10.1 0 018.227 8.227 1.053 1.053 0 001.044.879 1.4 1.4 0 00.181-.016 1.061 1.061 0 00.871-1.225 12.216 12.216 0 00-9.954-9.954 1.065 1.065 0 00-1.225.864 1.048 1.048 0 00.856 1.225z"
          transform="translate(-225.742 -79.18)"
        />
        <path
          id="prefix__Trac\xE9_123"
          data-name="Trac\xE9 123"
          className={props.className}
          d="M266.4 16.407A20.116 20.116 0 00250.006.016a1.058 1.058 0 10-.345 2.088 17.967 17.967 0 0114.648 14.648 1.053 1.053 0 001.044.879 1.4 1.4 0 00.181-.016 1.04 1.04 0 00.866-1.208z"
          transform="translate(-229.273)"
        />
      </g>
    </g>
  </svg>
);

const TwitterSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="twitter"
    role="img"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    />
  </svg>
);

const FacebookSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 310 310"
    {...props}
  >
    <g id="XMLID_834_">
      <path
        id="XMLID_835_"
        d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"
      />
    </g>
  </svg>
);

const YoutubeSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    data-name="002-youtube"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25.577 18"
  >
    <path
      d="M24.58 1.545C23.657.445 21.952 0 18.697 0H6.88C3.55 0 1.817.477.897 1.645 0 2.783 0 4.463 0 6.783v4.428c0 4.5 1.064 6.786 6.88 6.786H18.7c2.823 0 4.387-.4 5.4-1.364 1.038-.993 1.481-2.615 1.481-5.422V6.783c-.004-2.447-.074-4.135-1.001-5.238zm-8.16 8.066l-5.366 2.8a.825.825 0 01-1.207-.728V6.094a.825.825 0 011.205-.732l5.366 2.786a.825.825 0 010 1.463z"
      className={props.className}
    />
  </svg>
);

const TchatSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44.081 37.194"
  >
    <path
      data-name="Trac\xE9 120"
      d="M40.269 11.725h-9.814V3.768a3.784 3.784 0 00-3.768-3.769H3.768A3.784 3.784 0 000 3.768v13.793a3.784 3.784 0 003.768 3.768H6l2.807 3.77a.891.891 0 00.8.373 1.111 1.111 0 00.8-.373l2.81-3.768h.422v7.958a3.784 3.784 0 003.761 3.765h13.473l2.81 3.768a.891.891 0 00.8.373 1.111 1.111 0 00.8-.373l2.81-3.768h2.23a3.784 3.784 0 003.768-3.768V15.493a3.781 3.781 0 00-3.822-3.768zm-27.586 7.638a1.112 1.112 0 00-.8.373l-2.329 3.076-2.333-3.075a.891.891 0 00-.8-.373H3.664a1.788 1.788 0 01-1.8-1.8V3.768a1.788 1.788 0 011.8-1.8h22.92a1.788 1.788 0 011.8 1.8v13.793a1.788 1.788 0 01-1.8 1.8h-13.9zm29.443 9.922a1.788 1.788 0 01-1.8 1.8h-2.763a1.112 1.112 0 00-.8.373l-2.333 3.075-2.33-3.071a.891.891 0 00-.8-.373H17.4a1.788 1.788 0 01-1.8-1.8v-7.961h11.087a3.705 3.705 0 002.014-.585h7.427a.953.953 0 100-1.906h-5.835a3.25 3.25 0 00.211-1.272v-3.821h9.814a1.788 1.788 0 011.8 1.8v13.742zm-5.094-4.033a.948.948 0 01-.953.953H21.648a.953.953 0 110-1.906h14.431a.948.948 0 01.953.954zm-14.7-10.772H7.958a.953.953 0 010-1.906h14.377a.948.948 0 01.953.953.915.915 0 01-.953.954zM7 8.012a.948.948 0 01.953-.953H16.6a.953.953 0 110 1.906H7.958A.948.948 0 017 8.012z"
      className={props.className}
    />
  </svg>
);

const LinkedinSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
  </svg>
);

const UserSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <g
      id="prefix__Groupe_536"
      data-name="Groupe 536"
      transform="translate(-1583 -51)"
    >
      <g
        className={props.className}
        id="prefix__man-user_1_"
        data-name="man-user (1)"
        transform="translate(1556.702 63)"
      >
        <path
          className={props.className}
          id="prefix__Trac\xE9_426"
          data-name="Trac\xE9 426"
          d="M109.568 12.227c2.78 0 5.033-2.737 5.033-6.113S113.861 0 109.568 0s-5.033 2.737-5.033 6.113 2.254 6.114 5.033 6.114z"
          transform="translate(-58.166)"
        />
        <path
          id="prefix__Trac\xE9_427"
          data-name="Trac\xE9 427"
          className={props.className}
          d="M41.9 300.478c0-.206 0-.058 0 0z"
          transform="translate(0 -278.917)"
        />
        <path
          id="prefix__Trac\xE9_428"
          data-name="Trac\xE9 428"
          className={props.className}
          d="M308.085 301.673c0-.056 0-.391 0 0z"
          transform="translate(-247.176 -279.951)"
        />
        <path
          id="prefix__Trac\xE9_429"
          data-name="Trac\xE9 429"
          className={props.className}
          d="M60.91 186.358c-.093-5.882-.861-7.557-6.739-8.618a4.129 4.129 0 01-5.512 0c-5.814 1.049-6.629 2.7-6.736 8.427-.009.468-.013.492-.014.438v.618s1.4 2.821 9.506 2.821 9.506-2.821 9.506-2.821v-.457a3.79 3.79 0 01-.011-.408z"
          transform="translate(-.012 -165.044)"
        />
      </g>
    </g>
  </svg>
);

const LockSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      fillRule="evenodd"
      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
      clipRule="evenodd"
    />
  </svg>
);

const MenuSvg: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={props.className}
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
