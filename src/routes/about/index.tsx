import { createFileRoute } from "@tanstack/react-router";

import profilePicture from "../../assets/jpg/profile-picture.jpg";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <img alt="Profile picture" src={profilePicture} />
      <div>
        <span>Carlos Jose Ysais</span>
        <span>
          Ever since I encountered Python accidentally by clicking a YouTube
          video with a snake thumbnail, I knew I found my profession. I started
          by learning from free resources online created by genereous developers
          and I never stopped learning since. Currently, I specialize in
          building web apps, especially when it comes to back-end servers and
          databases.
        </span>
      </div>
    </div>
  );
}
