import NextAuth from "next-auth";
import { AuthConfig } from "@/config/auth.config";
// const ROOT = "/";
const PUBLIC_ROUTES = ["/login", "/signup"];
const AUTH_LOGIN_ROUTE = "/login";
const DEFAULT_REDIRECT = "/";

const { auth } = NextAuth(AuthConfig);

// export { auth as middleware } from "@/server/auth";
export default auth((req) => {
	const { nextUrl } = req;

	const isAuthenticated = !!req.auth;
	const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

	//check if authenticated
	if (isAuthenticated && isPublicRoute)
		return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));

	if (!isAuthenticated && !isPublicRoute)
		return Response.redirect(new URL(AUTH_LOGIN_ROUTE, nextUrl));
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
