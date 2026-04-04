import { type ComponentProps, useState } from "react";

import Fallback from "./Fallback";

type LazyImageProps = Pick<
  Required<ComponentProps<"img">>,
  "alt" | "className" | "src"
>;

function LazyImage({ alt, className, src }: LazyImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={
        !imageLoaded
          ? `${className} relative flex items-center justify-center`
          : ""
      }
    >
      <Fallback
        className={
          !imageLoaded
            ? "absolute animate-pulse text-center font-black text-red-700"
            : "hidden"
        }
        overrideClassName={true}
      />
      <img
        alt={alt}
        className={`${className || ""} ${!imageLoaded ? "invisible" : ""}`}
        loading="lazy"
        onLoad={() => {
          setImageLoaded(true);
        }}
        src={src}
      />
    </div>
  );
}

export default LazyImage;
