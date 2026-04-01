import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-16">
      <span className="text-center text-9xl font-black">
        Hello, I'm <span className="text-red-700">CJ</span>.
      </span>
      <span className="text-center text-5xl font-medium">
        A{" "}
        <span className="font-bold text-blue-700">
          full-stack web developer
        </span>{" "}
        who loves learning and coding.
      </span>
    </div>
  );
}
