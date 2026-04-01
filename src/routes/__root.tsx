import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="flex min-h-screen grow flex-col justify-between bg-gray-100">
      <div className="flex min-h-16 grow-0 flex-row items-center justify-evenly bg-blue-700">
        <Link className="text-2xl text-white [&.active]:font-black" to="/">
          Home
        </Link>
        <Link className="text-2xl text-white [&.active]:font-black" to="/about">
          About
        </Link>
        <Link
          className="text-2xl text-white [&.active]:font-black"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="text-2xl text-white [&.active]:font-black"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <Outlet />
      <div className="flex max-h-min grow-0 flex-row justify-center text-2xl font-extralight">
        <span>&copy; 2026 Carlos Jose Ysais</span>
      </div>
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
