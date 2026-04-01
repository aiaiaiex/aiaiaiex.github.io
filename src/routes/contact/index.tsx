import { createFileRoute } from "@tanstack/react-router";

import LinkedInSolid from "../../assets/svg/linkedin-solid.svg?react";
import MailBoxOutline from "../../assets/svg/mail-box-outline.svg?react";
import PhoneOutline from "../../assets/svg/phone-outline.svg?react";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-16">
      <span className="text-center text-4xl font-black">
        Want to work together? Reach me through my{" "}
        <span className="text-red-700">contact details</span> below.
      </span>

      <div className="grid grid-cols-3 gap-x-8">
        <a
          className="group flex flex-col items-center rounded-2xl border-2 border-blue-700 p-4 hover:bg-blue-700"
          href="mailto:carlosjose.ysais@gmail.com"
        >
          <MailBoxOutline className="size-32 text-blue-700 group-hover:text-white" />
          <span className="text-2xl font-bold text-blue-700 group-hover:text-white">
            Email
          </span>
        </a>

        <a
          className="group flex flex-col items-center rounded-2xl border-2 border-blue-700 p-4 hover:bg-blue-700"
          href="sms:+639764762171"
        >
          <PhoneOutline className="size-32 text-blue-700 group-hover:text-white" />
          <span className="text-2xl font-bold text-blue-700 group-hover:text-white">
            SMS
          </span>
        </a>

        <a
          className="group flex flex-col items-center rounded-2xl border-2 border-blue-700 p-4 hover:bg-blue-700"
          href="https://www.linkedin.com/in/carlos-jose-ysais/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInSolid className="size-32 text-blue-700 group-hover:text-white" />
          <span className="text-2xl font-bold text-blue-700 group-hover:text-white">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}
