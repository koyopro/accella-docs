import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { locals, request, redirect } = context;

  // Redirect to the sign-in page if the user is not signed in
  const path = new URL(request.url).pathname;
  if (!locals.session.user && !path.startsWith("/sign")) {
    return redirect("/signin");
  }

  return next();
});
