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
          : `${className} flex animate-pulse items-center justify-center text-center font-black text-red-700`
      }
    >
      Loading...
    </span>
  );
}

export default Fallback;
