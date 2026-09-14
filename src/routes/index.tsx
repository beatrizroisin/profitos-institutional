import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // A página principal atual é a Política de Segurança.
  beforeLoad: () => {
    throw redirect({ to: "/politica-de-seguranca" });
  },
  component: () => null,
});
