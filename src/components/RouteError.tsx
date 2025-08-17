import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function RouteError() {
  const error = useRouteError();
  let title = "Ocorreu um erro";
  let message = "Tente novamente mais tarde.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = (error.data as string) || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-neutral-600 dark:text-white/70">{message}</p>
    </div>
  );
}
