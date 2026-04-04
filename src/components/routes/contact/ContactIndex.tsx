import { lazy, Suspense } from "react";

import Fallback from "../../Fallback";

const LazyLinkedInSolid = lazy(() => {
  return import("../../../assets/svg/linkedin-solid.svg?react");
});
const LazyMailBoxOutline = lazy(() => {
  return import("../../../assets/svg/mail-box-outline.svg?react");
});
const LazyPhoneOutline = lazy(() => {
  return import("../../../assets/svg/phone-outline.svg?react");
});

function ContactIndex() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-8 sm:p-16">
      <span className="text-center text-3xl font-black sm:text-4xl">
        Want to work together? Reach me through my{" "}
        <span className="text-red-700">contact details</span> below.
      </span>

      <div className="flex flex-wrap justify-center gap-8">
        <a
          className="group flex flex-col items-center rounded-2xl p-4 shadow shadow-gray-400 hover:bg-blue-700"
          href="mailto:carlosjose.ysais@gmail.com"
        >
          <Suspense fallback={<Fallback className="size-24 sm:size-32" />}>
            <LazyMailBoxOutline className="size-24 text-blue-700 group-hover:text-white sm:size-32" />
          </Suspense>
          <span className="text-xl font-bold text-blue-700 group-hover:text-white sm:text-2xl">
            Email
          </span>
        </a>

        <a
          className="group flex flex-col items-center rounded-2xl p-4 shadow shadow-gray-400 hover:bg-blue-700"
          href="sms:+639764762171"
        >
          <Suspense fallback={<Fallback className="size-24 sm:size-32" />}>
            <LazyPhoneOutline className="size-24 text-blue-700 group-hover:text-white sm:size-32" />
          </Suspense>
          <span className="text-xl font-bold text-blue-700 group-hover:text-white sm:text-2xl">
            SMS
          </span>
        </a>

        <a
          className="group flex flex-col items-center rounded-2xl p-4 shadow shadow-gray-400 hover:bg-blue-700"
          href="https://www.linkedin.com/in/carlos-jose-ysais/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Suspense fallback={<Fallback className="size-24 sm:size-32" />}>
            <LazyLinkedInSolid className="size-24 text-blue-700 group-hover:text-white sm:size-32" />
          </Suspense>
          <span className="text-xl font-bold text-blue-700 group-hover:text-white sm:text-2xl">
            LinkedIn
          </span>
        </a>
      </div>
    </div>
  );
}

export default ContactIndex;
