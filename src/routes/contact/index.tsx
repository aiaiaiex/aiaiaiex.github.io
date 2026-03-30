import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <span>
        Want to work together? Reach me through my contact details below.
      </span>
      <div>
        <a href="mailto:carlosjose.ysais@gmail.com">Email</a>
      </div>
      <div>
        <a href="sms:+639764762171">SMS</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/carlos-jose-ysais/">LinkedIn</a>
      </div>
    </div>
  );
}
