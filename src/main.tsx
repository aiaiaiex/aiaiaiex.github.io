import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import CSS.
import "./index.css";
// Import default pending component.
import Pending from "./components/Pending";
// Import the generated route tree.
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();

// Create a new router instance.
const router = createRouter({
  defaultPendingComponent: Pending,
  defaultPreload: "intent",
  history: hashHistory,
  routeTree,
  scrollRestoration: true,
});

// Register the router instance for type safety.
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app.
const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
