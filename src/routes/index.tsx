import { createFileRoute } from "@tanstack/react-router";

import RootIndex from "../components/routes/RootIndex";

export const Route = createFileRoute("/")({
  component: RootIndex,
});
