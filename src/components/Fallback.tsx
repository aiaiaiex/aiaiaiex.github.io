import type { ComponentProps } from "react";

type FallbackProps = Pick<Required<ComponentProps<"span">>, "className"> & {
  overrideClassName?: boolean;
};

function Fallback({ className, overrideClassName = false }: FallbackProps) {
  return (
    <span
      className={
        overrideClassName
          ? className
          : `${className} animate-pulse content-center text-center font-black text-red-700`
      }
    >
      Loading...
    </span>
  );
}

export default Fallback;
