import { createFileRoute } from "@tanstack/react-router";

import ProjectsIndex from "../../components/routes/projects/ProjectsIndex";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
});
