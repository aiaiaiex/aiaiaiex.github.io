import { createFileRoute } from "@tanstack/react-router";

import AboutIndex from "../../components/routes/about/AboutIndex";

export const Route = createFileRoute("/about/")({
  component: AboutIndex,
});
