import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-8 sm:p-16">
      <span className="text-center text-8xl font-black sm:text-9xl">
        Hello, I'm <span className="text-red-700">CJ</span>.
      </span>
      <span className="text-center text-4xl font-medium sm:text-5xl">
        A{" "}
        <span className="font-bold text-blue-700">
          full-stack web developer
        </span>{" "}
        who loves learning and coding.
      </span>
    </div>
  );
}
