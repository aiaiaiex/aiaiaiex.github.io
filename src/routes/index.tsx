import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <span>Hello, I'm CJ.</span>
      <span>A full-stack web developer who loves learning and coding.</span>
    </div>
  );
}
