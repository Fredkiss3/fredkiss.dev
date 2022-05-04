import NextImage from "next/image";
import { clsx } from "../lib/webutils";

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  objectFit?: `fill` | `contain` | `cover` | `none` | `scale-down`;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  imageClassName,
  objectFit = "cover",
}) => (
  <div className={clsx(`relative`, className)}>
    <NextImage
      src={src}
      alt={alt}
      layout={`fill`}
      objectPosition={`center`}
      objectFit={objectFit}
      className={clsx(imageClassName)}
    />
  </div>
);
