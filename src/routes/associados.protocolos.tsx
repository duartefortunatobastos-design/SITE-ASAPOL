import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/associados/protocolos")({
  component: () => <Outlet />,
});
