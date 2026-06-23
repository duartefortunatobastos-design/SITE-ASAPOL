import { QueryClient } from "@tanstack/react-query";
import {
  createRouter,
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function createAppHistory() {
  if (typeof window === "undefined") {
    return createMemoryHistory({ initialEntries: ["/"] });
  }
  if (import.meta.env.VITE_USE_HASH_ROUTER === "true") {
    return createHashHistory();
  }
  return createBrowserHistory();
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createAppHistory(),
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
