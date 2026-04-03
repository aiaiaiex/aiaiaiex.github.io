import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function Root() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-gray-100">
        <div className="flex h-16 grow-0 flex-row items-center justify-evenly bg-blue-700">
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-xl text-white sm:text-2xl [&.active]:font-black"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <Outlet />
        <div className="flex max-h-min grow-0 flex-row justify-center text-xl font-extralight sm:text-2xl">
          <span>&copy; 2026 Carlos Jose Ysais</span>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

export default Root;
