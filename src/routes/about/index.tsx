import { createFileRoute } from "@tanstack/react-router";

import profilePicture from "../../assets/jpg/profile-picture.jpg";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex grow flex-row items-center justify-center gap-x-8 p-16">
      <img
        alt="Profile picture"
        className="size-64 rounded-full border border-gray-400"
        src={profilePicture}
      />
      <div className="flex flex-col items-start gap-y-4">
        <span className="text-4xl font-black">
          <span className="text-red-700">C</span>arlos{" "}
          <span className="text-red-700">J</span>ose Ysais
        </span>
        <span className="text-2xl font-medium">
          Ever since I encountered Python accidentally by clicking a YouTube
          video with a snake thumbnail, I knew I found my profession. I started
          by learning from free resources online created by genereous developers
          and{" "}
          <span className="font-bold text-blue-700">
            I never stopped learning
          </span>{" "}
          since. Currently, I specialize in building web apps, especially when
          it comes to{" "}
          <span className="font-bold text-blue-700">back-end servers</span> and{" "}
          <span className="font-bold text-blue-700">databases</span>.
        </span>
      </div>
    </div>
  );
}
