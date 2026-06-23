import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos")({
  component: () => <Outlet />,
});
