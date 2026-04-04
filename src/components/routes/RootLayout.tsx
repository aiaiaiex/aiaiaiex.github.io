import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { windowScrollToTop } from "../../utils/windowUtils";

function RootLayout() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-gray-100">
        <div className="sticky top-0 z-10 flex h-16 grow-0 flex-row items-center justify-evenly bg-blue-700">
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            onClick={windowScrollToTop}
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            onClick={windowScrollToTop}
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            onClick={windowScrollToTop}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            onClick={windowScrollToTop}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <Outlet />
        <div className="flex max-h-min grow-0 flex-row justify-center text-xl font-extralight sm:text-2xl">
          <span>&copy; {new Date().getFullYear()} Carlos Jose Ysais</span>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export default RootLayout;
