import { createFileRoute } from "@tanstack/react-router";

import ContactIndex from "../../components/routes/contact/ContactIndex";

export const Route = createFileRoute("/contact/")({
  component: ContactIndex,
});
